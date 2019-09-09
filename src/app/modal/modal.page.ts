import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import { modalController } from '@ionic/core';
import { Task } from '../model/task';
import {TaskService} from '../services/TaskService';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  task: Task;

  constructor(private navParams: NavParams, private modalController: ModalController,private taskService: TaskService,) {
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

  saveData() {
    this.taskService
            .update(this.task)
            .subscribe(jsonObject => console.log(new Task(jsonObject)));
    this.modalController.dismiss('cancel');
  }

}
