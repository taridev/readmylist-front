import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceMock {

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

}
