import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import {environment} from '../../environments/environment';
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
export class TaskService {
  constructor(private http: HttpClient) { }

  getAllByTitlePattern(pattern: string): Task[] {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Task {
    throw new Error('Method not implemented.');
  }
  getAll(): Task[] {
    throw new Error('Method not implemented.');
  }
  create(task: Task): Task {
    throw new Error('Method not implemented.');
  }
  update(task: Task): Task {
    const headers = new HttpHeaders();
    const url = `${API_URL}/task/update/${task.id}`;
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    this.http.put(url, task)
        .subscribe(data =>
                task = new Task(data)
            , error => {
              console.log(error);
            });
    return task;
  }
  delete(task: Task) {
    throw new Error('Method not implemented.');
  }


}
