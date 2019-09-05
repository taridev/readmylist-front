import { Injectable } from '@angular/core';
import { ITaskListServiceService } from './itask-list-service.service';
import { TaskList } from '../model/task-list';
import { of } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TaskListMockService implements ITaskListServiceService {

  constructor() { }

  tasklists: TaskList[] = [
    {
      id: 1,
      title: 'ma 1ère liste',
      creationDate: null,
      tasks: [
          {
              id: 1,
              title: '1ère tache',
              creationDate: null,
              dueDate: null,
              done: false,
              prioritize: false
          }
      ]
    }
  ];

  getById(id: number): TaskList {
   return this.tasklists.find(t => t.id === id);
  }

  getByTitlePattern(pattern: string): TaskList[] {
    return this.tasklists.filter(t => t.title.indexOf(pattern) > -1);
  }

  getAll(): TaskList[] {
      return this.tasklists;
  }

  create(taskList: TaskList): TaskList {
    taskList.id = Math.max.apply(Math, this.tasklists.map(function(o) { return o.id; })) + 1;
    this.tasklists.push(taskList);
    return taskList;
  }

  update(taskList: TaskList): TaskList {
    // throw new Error('Method not implemented.');
    return null;
  }
  delete(taskList: TaskList): TaskList {
    // throw new Error('Method not implemented.');
    return null;
  }
}
