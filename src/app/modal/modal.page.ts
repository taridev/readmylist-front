import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import { modalController } from '@ionic/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  passeId = null;
  
  constructor(private navParams: NavParams, private modalController: ModalController) {
 }

  ngOnInit() {
    this.passeId = 1;
  }

  closeModal(){
    // this.modalController.dismiss();
    this.modalController.dismiss('cancel');
    
  }

}
