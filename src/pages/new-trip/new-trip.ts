import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the NewTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-trip',
  templateUrl: 'new-trip.html',
})
export class NewTripPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view:ViewController) {
  }

  Preview(){
  
    this.closeTrip();

  }
  closeTrip(){
    this.view.dismiss();

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTripPage');
  }

}
