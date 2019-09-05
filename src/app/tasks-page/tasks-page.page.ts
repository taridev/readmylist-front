import { Component, OnInit } from '@angular/core';
import { TaskListMockService } from '../services/task-list-mock.service';
import { TaskList } from '../model/task-list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.page.html',
  styleUrls: ['./tasks-page.page.scss'],
})
export class TasksPagePage implements OnInit {

  tasklist: TaskList = null
  tasks: TaskList['tasks'] = null;

  constructor(private route: ActivatedRoute, private taskLIstMockService: TaskListMockService) {
    this.tasklist = this.taskLIstMockService.getById(1);
    this.tasks = this.tasklist.tasks;
   }

  ngOnInit() {
  }

  onClickAddTask() {
    // this.taskLIstMockService.create();
    console.log('ADD TACHE');
  }



}
