import { Component, ViewChild, NgZone, ElementRef, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Geolocation } from '@ionic-native/geolocation';
import {FormControl} from "@angular/forms";
import {} from 'google-maps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

@ViewChild('map') mapElement;
map : any;
lat:number;
lng:number;
geoInfo:any={
  resp:'',
  data:''
};
public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;

constructor(public navCtrl: NavController, private mapsAPILoader: MapsAPILoader,
  private ngZone: NgZone) {

    this.searchControl = new FormControl();

    /*this.geolocation.getCurrentPosition().then((resp) => {
      resp.coords.latitude
      resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });*/
  }

  


  ionViewDidLoad(){
    this.searchControl = new FormControl();
    
    //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
          let nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];
          let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
              types: ["address"]
          });
          autocomplete.addListener("place_changed", () => {
              this.ngZone.run(() => {
                  //get the place result
                  let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                  //verify result
                  if (place.geometry === undefined || place.geometry === null) {
                      return;
                  }

                  //set latitude, longitude and zoom
                  this.latitude = place.geometry.location.lat();
                  this.longitude = place.geometry.location.lng();
                  this.zoom = 12;
              });
          });
      });

    this.initMap();
  }
  
  initMap(){
    let latlang = new google.maps.LatLng(-26.2020262, 28.0521884);
    let mapOptions ={
      center : latlang,
      zoom: 15,
      disableDefaultUI: true

     
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    let marker:any;
    marker = new google.maps.Marker({map:this.map,position:latlang});
  }


}
