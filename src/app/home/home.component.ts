import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from '../task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
  "../../../node_modules/bootstrap/dist/css/bootstrap.min.css",  ]
})
export class HomeComponent implements OnDestroy {

  
  constructor(private appService: AppService) {}


  tasks: any[] = [];
  length: any;
  compLength: any;
  uncompLength: any;

  destroy$: Subject<boolean> = new Subject<boolean>();

  getAllTasks() {
    this.appService.getTasks().pipe(takeUntil(this.destroy$)).subscribe((tasks: any) => {
        this.tasks = tasks;
        this.length = tasks.length;
        this.compLength = 0;
        this.uncompLength = 0;
        tasks.forEach((element: { complete: any; }) => {
          if(element.complete)
            this.compLength++;
          else
            this.uncompLength++;
        });
    });
  }

  delete(task: any){
    this.tasks.splice(task);
    this.appService.deleteTask(task).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
    });
  }

  complete(task: any){
    this.appService.completeTask(task).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
