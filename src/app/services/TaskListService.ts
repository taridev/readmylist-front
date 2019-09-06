import {Injectable} from '@angular/core';
import {TaskList} from '../model/task-list';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../model/task';

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
    const url = `${API_URL}list/${id}`;
    let tasklist: TaskList;
    return this.http
        .get(url);
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

  addTask(taskList: TaskList, task: Task) {
    var headers = new HttpHeaders();
    const url = `${API_URL}task/create/${taskList.id}`;
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');

    this.http.post(url, task)
        .subscribe(data => {
          console.log(data);
          task = new Task(data)
        }, error => {
          console.log(error);
        });
    return task;
  }


}
