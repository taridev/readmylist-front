import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TaskList } from '../model/task-list';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.page.html',
  styleUrls: ['./modal-list.page.scss'],
})
export class ModalListPage implements OnInit {

  tasklist: TaskList;
  clone: TaskList;

  constructor(
    private navParams: NavParams,
    private modalListController: ModalController,
  ) { }

  ngOnInit() {
    this.tasklist = this.navParams.get('taskList');
    this.clone = Object.assign({}, this.tasklist);
  }

  async closeModalList() {
    await this.modalListController.dismiss();
  }

  async saveData() {
    await this.modalListController.dismiss(this.clone);
  }

}
