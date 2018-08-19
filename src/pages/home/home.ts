// import { Component, ViewChild, NgZone, ElementRef, OnInit } from '@angular/core';
// import { NavController } from 'ionic-angular';
// //import { Geolocation } from '@ionic-native/geolocation';
 import {FormControl} from "@angular/forms";
 import {} from 'google-maps';
 import { MapsAPILoader } from '@agm/core';

// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })

// export class HomePage {

// @ViewChild('map') mapElement;
// map : any;
// lat:number;
// lng:number;
// geoInfo:any={
//   resp:'',
//   data:''
// };
// public latitude: number;
//     public longitude: number;
//     public searchControl: FormControl;
//     public zoom: number;

// constructor(public navCtrl: NavController, private mapsAPILoader: MapsAPILoader,
//   private ngZone: NgZone) {

//     this.searchControl = new FormControl();

//     /*this.geolocation.getCurrentPosition().then((resp) => {
//       resp.coords.latitude
//       resp.coords.longitude
//      }).catch((error) => {
//        console.log('Error getting location', error);
//      });*/
//   }




//   ionViewDidLoad(){
//     this.searchControl = new FormControl();

//     //load Places Autocomplete
//       this.mapsAPILoader.load().then(() => {
//           let nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];
//           let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
//               types: ["address"]
//           });
//           autocomplete.addListener("place_changed", () => {
//               this.ngZone.run(() => {
//                   //get the place result
//                   let place: google.maps.places.PlaceResult = autocomplete.getPlace();

//                   //verify result
//                   if (place.geometry === undefined || place.geometry === null) {
//                       return;
//                   }

//                   //set latitude, longitude and zoom
//                   this.latitude = place.geometry.location.lat();
//                   this.longitude = place.geometry.location.lng();
//                   this.zoom = 12;
//               });
//           });
//       });

//     this.initMap();
//   }

//   initMap(){
//     let latlang = new google.maps.LatLng(-26.2020262, 28.0521884);
//     let mapOptions ={
//       center : latlang,
//       zoom: 15,
//       disableDefaultUI: true
//     };

//     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//     let marker:any;
//     marker = new google.maps.Marker({map:this.map,position:latlang});
//   }


// }
import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})

export class HomePage {

//   lat : any;
//   longt: any;
//  @ViewChild('map') mapElement;
 map : any;
//   geoInfo:any={
//     resp:'',
//     data:''
// };
public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;

 constructor(public navCtrl: NavController,private ngZone: NgZone, private mapsAPILoader: MapsAPILoader) {
     this.searchControl = new FormControl();
 }



googleMap(){

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

      infoWindow.setPosition(pos);
      infoWindow.setContent('You are Here');
      infoWindow.open(map);
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
  this.googleMap();
}




















//  ionViewDidLoad(){
//    interface Coordinates {
// };

// //geolocation: Geolocation
//   this.geolocation.getCurrentPosition().then((resp) => {
//     this.lat = resp.coords.latitude;
//     this.longt = resp.coords.longitude;
//     this.initMap(this.lat,this.longt);
//     console.log('lat: ' + resp.coords.latitude + ', lon: ' + resp.coords.longitude);
//    }).catch((error) => {
//      console.log('Error getting location', error);
//    });
//    const watch = this.geolocation.watchPosition().subscribe(pos => {
//     console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
//   });

//  }
//  initMap(s,t){
//   console.log(s);
//   console.log(t);

//    let latlang = new google.maps.LatLng(-26.2020007,28.0522048);
//    let mapOptions ={
//      center : latlang,
//      zoom: 15
//    };
//    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//    let marker: google.maps.Marker;
//    marker = new google.maps.Marker({map:this.map,position:latlang});
//  }
}
