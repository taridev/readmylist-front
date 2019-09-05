import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {TaskListService} from '../services/TaskListService';
=======
import { TaskListMockService } from '../services/task-list-mock.service';
import { TaskList } from '../model/task-list';
import { ActivatedRoute } from '@angular/router';
>>>>>>> d2ee12be521684db3e2911097bdccf87705fbdd4

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.page.html',
  styleUrls: ['./tasks-page.page.scss'],
})
export class TasksPagePage implements OnInit {

<<<<<<< HEAD
  constructor(private service: TaskListService) {
    service.getById(1);
  }
=======
  tasklist: TaskList = null
  tasks: TaskList['tasks'] = null;

  constructor(private route: ActivatedRoute, private taskLIstMockService: TaskListMockService) {
    this.tasklist = this.taskLIstMockService.getById(1);
    this.tasks = this.tasklist.tasks;
   }
>>>>>>> d2ee12be521684db3e2911097bdccf87705fbdd4

  ngOnInit() {
  }



}
