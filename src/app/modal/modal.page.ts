import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Task} from '../model/task';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

    task: Task;
    clone : Task;

    constructor(
        private navParams: NavParams,
        private modalController: ModalController,
    ) {
    }

    ngOnInit() {
        this.task = this.navParams.get('task');
        this.clone = Object.assign({}, this.task);
    }

    async closeModal() {
        await this.modalController.dismiss();

    }

    async saveData() {
        await this.modalController.dismiss(this.clone);
    }

}
