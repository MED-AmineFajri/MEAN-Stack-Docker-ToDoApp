/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css',
  "../../../node_modules/bootstrap/dist/css/bootstrap.min.css", ]
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../task.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css',
    "../../../node_modules/bootstrap/dist/css/bootstrap.min.css",]
})
export class NewComponent implements OnDestroy {

  constructor(private appService: AppService) {}
  @Output() count = new EventEmitter<any>();

  taskForm = new FormGroup({
    task: new FormControl('', Validators.minLength(1) && Validators.required),
  });

  tasks: any[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    this.appService.addTaks(this.taskForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.taskForm.reset();
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

