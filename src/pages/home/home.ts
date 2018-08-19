
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


 map : any;

public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;
    public destinationAddress:any

 constructor(public navCtrl: NavController,private ngZone: NgZone, private mapsAPILoader: MapsAPILoader) {
     this.searchControl = new FormControl();




 }



googleMap(){
  this.searchControl = new FormControl();
 let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 15
  });

  let infoWindow = new google.maps.InfoWindow();

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude

      };
      var carposition = {
        lat: position.coords.latitude+0.000002,
        lng: position.coords.longitude-0.02
      };
      // var destination = {
      //   lat: this.latitude,
      //   lng: this.longitude
      // };
      var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
      };
      // Create the polyline and add the symbol via the 'icons' property.
      var line = new google.maps.Polyline({

        path: [carposition, pos],
        icons: [{
          icon: lineSymbol,
          offset: '100%'
        }],
        map: map
      });


   let mapicon:any={
     url:'./../../assets/icon/map-marker-icon-2-300x300.png',
     scaledSize:new google.maps.Size(25,25),
     origin:new google.maps.Point(0,0),
     anchor:new google.maps.Point(0,0)
   }
   let caricon:any={
    url:'./../../assets/icon/car.png',
    scaledSize:new google.maps.Size(40,25),
    origin:new google.maps.Point(0,0),
    anchor:new google.maps.Point(0,0)
  }

  // Define a symbol using a predefined path (an arrow)
  // supplied by the Google Maps JavaScript API.

   let marker: google.maps.Marker;
    marker = new google.maps.Marker({map:map,position:pos,icon:mapicon});
    let destmarker: google.maps.Marker;
     //destmarker = new google.maps.Marker({map:map,position:dest,icon:mapicon});
    let carmarker: google.maps.Marker;
    carmarker = new google.maps.Marker({map:map,position:carposition,icon:caricon});
      map.setCenter(pos);
    }, function() {
      this.handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    this.handleLocationError(false, infoWindow, map.getCenter());

  }
}

handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(this.map);
}

ionViewDidLoad(){
      this.searchControl = new FormControl();
      let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 15
      });
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

                  this.latitude = place.geometry.location.lat();
                  this.longitude = place.geometry.location.lng();
                  if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                      var pos = {
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng()

                      };
                      console.log(pos.lat)
                      let desticon:any={
                        url:'./../../assets/icon/map-marker-icon-2-300x300.png',
                        scaledSize:new google.maps.Size(25,25),
                        origin:new google.maps.Point(0,0),
                        anchor:new google.maps.Point(0,0)
                      };
                   let destmarker: google.maps.Marker;
                   destmarker = new google.maps.Marker({map:map,position:pos,icon:desticon});


                    }, function() {

                    });
                  } else {
                    // Browser doesn't support Geolocation
                    this.handleLocationError(false, infoWindow, map.getCenter());

                  }

       // this.zoom = 12;
              });

          });
      });

  this.googleMap();


;
}


}
