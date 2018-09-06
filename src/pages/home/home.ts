
 import {FormControl} from "@angular/forms";
 import {} from 'google-maps';
 import { MapsAPILoader } from '@agm/core';
import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, Icon } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})

export class HomePage {
map:any
public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;
    public destinationAddress:any
    public googleload:any
    public currentAddress_lat:any
    public currentAddress_lon:any



 constructor(public navCtrl: NavController,private ngZone: NgZone, private mapsAPILoader: MapsAPILoader) {
     this.searchControl = new FormControl();
 }

googleMap(destination){
   // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude

      };
      this.currentAddress_lat=position.coords.latitude;
      this.currentAddress_lon=position.coords.longitude;



  })} else {
    // Browser doesn't support Geolocation


  }
}

ionViewDidLoad(){
      this.searchControl = new FormControl();

      let infoWindow = new google.maps.InfoWindow();

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

                  }else{

                  }

                  //set latitude, longitude and zoom
                  this.destinationAddress=place.formatted_address;
                  var g=place.geometry.location.lat();
                  var f=place.geometry.location.lng();
                  this.latitude =g;
                  this.longitude =f;
                  var pos = {
                    lat: g,
                    lng: f

                  };
                  this.googleMap(pos);


              });

          });
      });




;
}


}
