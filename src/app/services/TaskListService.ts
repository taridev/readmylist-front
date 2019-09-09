import {Injectable} from '@angular/core';
import {TaskList} from '../model/task-list';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../model/task';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {isJsonObject} from "@angular-devkit/core";
import {create} from "domain";
import any = jasmine.any;

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
  constructor(private http: HttpClient) {

  }

  getByTitlePattern(pattern: string): TaskList[] {
    throw new Error('Method not implemented.');
  }

  getById(id: number): Observable<TaskList> {
    const url = `${API_URL}/list/${id}`;
    return this.http
        .get(url)
        .pipe(
            map((jsonObject: Object) => new TaskList(jsonObject))
        );
  }


  getAll(): Observable<TaskList[]> {
    const url = `${API_URL}/list`;
    return this.http
        .get<TaskList[]>(url);
  }

  create(taskList: TaskList): Observable<TaskList>  {
    const headers = new HttpHeaders();
    const url = `${API_URL}/list/create`;
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return this.http
        .post(url, taskList)
        .pipe(
            // tslint:disable-next-line:ban-types
            map((jsonObject: Object) =>
                new TaskList(jsonObject))
        );
  }

  update(taskList: TaskList): Observable<TaskList>  {
    throw new Error('Method not implemented.');
  }

  delete(taskList: TaskList) {
    throw new Error('Method not implemented.');
  }

  addTask(taskList: TaskList, task: Task): Observable<Task> {
    const headers = new HttpHeaders();
    const url = `${API_URL}/task/create/${taskList.id}`;
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    return this.http
        .post(url, task)
        .pipe(
            // tslint:disable-next-line:ban-types
            map((jsonObject: Object) => new Task(jsonObject))
        );
  }


}
