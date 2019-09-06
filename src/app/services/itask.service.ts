import { Injectable } from '@angular/core';
import { Task } from '../model/task';

/*@Injectable({
  providedIn: 'root'
})*/
export interface ITaskService {

  getById(id: number): Task;

  getAll(): Task[];

  create(task: Task): Task;
  update(task: Task): Task;
  delete(task: Task): void;
  getAllByTitlePattern(pattern: string): Task[];

}
