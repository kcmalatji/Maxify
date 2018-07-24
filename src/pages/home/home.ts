import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
//import { NewTripPage } from '../new-trip/new-trip';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modal:ModalController) {

  }
  openModal(){
    let newTrip=this.modal.create('NewTripPage');
    newTrip.present();
  }

}
