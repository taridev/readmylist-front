import { Component, OnInit } from '@angular/core';
import {TaskListService} from '../services/TaskListService';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.page.html',
  styleUrls: ['./tasks-page.page.scss'],
})
export class TasksPagePage implements OnInit {

  constructor(private service: TaskListService) {
    service.getById(1);
  }

  ngOnInit() {
  }

}
