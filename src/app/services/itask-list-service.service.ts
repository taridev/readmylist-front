import { Injectable } from '@angular/core';
import { TaskList } from '../model/task-list';

/*@Injectable({
  providedIn: 'root'
})*/
export interface ITaskListServiceService {

  getById(id: number): TaskList;

  getAll(): TaskList[];

  create(taskList: TaskList): TaskList;
  update(taskList: TaskList): TaskList;
  delete(taskList: TaskList): void;
  getByTitlePattern(pattern: string): TaskList[];

}
