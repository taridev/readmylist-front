import { Injectable } from '@angular/core';
import { TaskList } from '../model/task-list';
import { Task } from '../model/task';

/*@Injectable({
  providedIn: 'root'
})*/
export interface ITaskListServiceService {

  getById(id: number): any;

  getAll(): TaskList[];

  create(taskList: TaskList): TaskList;
  update(taskList: TaskList): TaskList;
  delete(taskList: TaskList): void;
  getByTitlePattern(pattern: string): TaskList[];

  addTask(taskList: TaskList, task: Task): TaskList;

}
