import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { ITaskService } from './itask.service';

@Injectable({
  providedIn: 'root'
})
export class TaskMockService implements ITaskService {

  tasks: Task[] =
  [
    {
      id: 1,
      title: 'tache 1',
      creationDate: null ,
      dueDate: null ,
      done: null ,
      prioritize: null,
    },
    {
      id: 2,
      title: 'tache 2',
      creationDate:  null,
      dueDate: null,
      done: null,
      prioritize: null,
    }
  ];

  constructor() { }

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    return this.tasks.find(task => task.id === id);
  }

  getAllByTitle(title: string) {
    return this.tasks.filter(task => task.title === title);
  }

  getAllByTitlePattern(pattern: string) {
    return this.tasks.filter(task => task.title.indexOf(pattern) >= -1);
  }

  create(task: Task): Task {
    task.id = Math.max.apply(Math, this.tasks.map(function(o) { return o.id; })) + 1;
    this.tasks.push(task);
    return task;
  }

  update(task: Task): Task {
    return null;
  }

  delete(task: Task): Task {
    return null;
  }

}
