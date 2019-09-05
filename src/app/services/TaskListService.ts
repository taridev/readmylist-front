import { Injectable } from '@angular/core';
import { ITaskListServiceService } from './itask-list-service.service';
import { TaskList } from '../model/task-list';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const API_URL = environment.apiUrl;
const HTTP_OPTION = {
  headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class TaskListService implements ITaskListServiceService {
  constructor(private http: HttpClient
    ) {

   }
   getByTitlePattern(pattern: string): TaskList[] {
    throw new Error('Method not implemented.');
  }
  getById(id: number): any {
    const tasklist = this.http
        .get<TaskList>(`${API_URL}list/${id}`, HTTP_OPTION)
        .subscribe(task => {
          console.log(task);
        }, error => console.log(error));
    console.log(tasklist);
    return tasklist;
  }
  getAll(): TaskList[] {
    throw new Error('Method not implemented.');
  }
  create(taskList: TaskList): TaskList {
    throw new Error('Method not implemented.');
  }
  update(taskList: TaskList): TaskList {
    throw new Error('Method not implemented.');
  }
  delete(taskList: TaskList) {
    throw new Error('Method not implemented.');
  }


}
