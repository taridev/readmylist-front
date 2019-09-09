import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import { modalController } from '@ionic/core';
import { Task } from '../model/task';
import {TaskService} from '../services/TaskService';
import {ActivatedRoute} from "@angular/router";
import {TaskListService} from "../services/TaskListService";
import {Observable} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  task: Task;
  
  constructor(
      private navParams: NavParams,
      private route: ActivatedRoute,
      private taskService: TaskService,
      private modalController: ModalController) {
    this.task = this.navParams.get('task');
 }

  ngOnInit() {
    // this.task.title = this.navParams.get('title');
    // console.log(this.task.title);
  }

  closeModal(){
    // this.modalController.dismiss();
    this.modalController.dismiss('cancel');
    
  }

    onClickSave: (task: Task) {
        this.taskService.update(this.task.id);
    }
}
