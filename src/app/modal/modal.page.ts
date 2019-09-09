import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import { modalController } from '@ionic/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  task: Task;er: ModalController) {
creationDate:any;
  dueDate:any;

  constructor(private navParams: NavParam  
  coate modntroluctovate nNavParams, plrs, private modalController: ModalController) {
    this.task = this.navParams.get('task');
    console.log(this.task.creationDate);
 }

  ngOnInit() {
    // this.task.title = this.navParams.get('title');
    // console.log(this.task.title);
  }

  closeModal(){
   et('title');
  // console.log(this.task.title);
 r  // this.modalController.dismis  // this.modalismiss();
    // this.modalController.dismiss();
    this.modalController.dismiss('cancel');
    
