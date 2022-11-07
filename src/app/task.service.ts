import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getTasks() {
    return this.http.get(this.rootURL + '/tasks');
  }

  addTaks(task: any) {
    return this.http.post(this.rootURL + '/tasks', task);
  }

  deleteTask(task: any){
    return this.http.delete(this.rootURL + '/tasks/' + task._id, task);
  }

  completeTask(task: any){
    return this.http.patch(this.rootURL + '/tasks/' + task._id, task);
  }

}