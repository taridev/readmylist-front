import { Injectable } from '@angular/core';
import { TaskList } from '../model/task-list';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Task } from '../model/task';

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
export class TaskListService {
  constructor(private http: HttpClient
    ) {

   }
   getByTitlePattern(pattern: string): TaskList[] {
    throw new Error('Method not implemented.');
  }

  getById(id: number) {
      return this.http
          .get(`${API_URL}list/${id}`);
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

  addTask(taskList: TaskList, task: Task): TaskList {
    return undefined;
  }


}
