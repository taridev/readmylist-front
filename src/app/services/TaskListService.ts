import { Injectable } from '@angular/core';
import { ITaskListServiceService } from './itask-list-service.service';
import { TaskList } from '../model/task-list';
@Injectable({
  providedIn: 'root'
})
export class TaskListService implements ITaskListServiceService {
  
  getByTitlePattern(pattern: string): TaskList[] {
    throw new Error('Method not implemented.');
  }
  getById(id: number): TaskList {
    throw new Error('Method not implemented.');
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

  constructor() { }
}
