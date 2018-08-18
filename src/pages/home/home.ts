import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map:any=null;
  geoInfo:any={
      resp:'',
      data:''
  };
  lat : number;
  longt: number;

  constructor(public navCtrl: NavController,private geolocation: Geolocation) {
 
    this.geolocation.getCurrentPosition().then((resp) => {
      this.geoInfo.resp=JSON.stringify(resp);
       resp.coords.latitude
       resp.coords.longitude
       this.lat = (resp.coords.latitude);
       this.longt =(resp.coords.longitude);
       console.log(this.lat);
       console.log(this.longt);

  }).catch((error) => {
      console.log('Error getting location', error);
      this.geoInfo.resp='Error getting location';
  });

  let watch = this.geolocation.watchPosition();
  watch.subscribe((data) => {
      this.geoInfo.data=JSON.stringify(data);
      // data can be a set of coordinates, or an error (if an error occurred).
       data.coords.latitude
       data.coords.longitude
  });

  }
  
  test(){
 
  }

}
