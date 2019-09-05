import { Injectable } from '@angular/core';
import { TaskList } from '../model/task-list';
import { Task } from '../model/task';

/*@Injectable({
  providedIn: 'root'
})*/
export interface ITaskListServiceService {

  getById(id: number): any;
  getAll(): any[];
  create(taskList: TaskList): any;
  update(taskList: TaskList): any;
  delete(taskList: TaskList): void;
  getByTitlePattern(pattern: string): any[];
  addTask(taskList: TaskList, task: Task): any;

}
