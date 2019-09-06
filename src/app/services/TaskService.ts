import { Injectable } from '@angular/core';
import { ITaskService } from './itask.service';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements ITaskService {

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
    throw new Error('Method not implemented.');
  }
  delete(task: Task) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
