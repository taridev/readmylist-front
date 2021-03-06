import {Injectable} from '@angular/core';
import {TaskList} from '../models/task-list';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../models/task';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

const API_URL = environment.apiUrl;

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

  delete(id): Observable<object> {
    const url = `${API_URL}/list/delete/${id}`;

    return this.http.delete(url);
  }

  addTask(taskList: TaskList, task: Task): Observable<Task> {
    const headers = new HttpHeaders();
    const url = `${API_URL}/task/create/${taskList.id}`;
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    return this.http
        .post(url, task)
        .pipe(
            map((jsonObject: Object) => new Task(jsonObject))
        );
  }


}
