import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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

  getAllByTitlePattern(pattern: string): Observable<Task[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Observable<Task> {
    throw new Error('Method not implemented.');
  }
  getAll(): Observable<Task[]> {
    throw new Error('Method not implemented.');
  }
  create(task: Task): Observable<Task> {
    throw new Error('Method not implemented.');
  }
    update(task: Task): Observable<Task> {
        const headers = new HttpHeaders();
        const url = `${API_URL}/task/update/${task.id}`;
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        return this.http
            .put(url, task)
            .pipe(
                // tslint:disable-next-line:ban-types
                map((jsonObject: Object) => new Task(jsonObject)));
    }

    /**
     * /!\ Pas encore fonctionnel !!!
     * @param id
     */
  delete(id): Observable<object> {
    const headers = new HttpHeaders();
    const url = `${API_URL}/task/delete/${id}`;

    return this.http.delete(url);
  }


}
