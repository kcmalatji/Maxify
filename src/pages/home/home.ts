// import { Component , ViewChild, ElementRef} from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { Geolocation } from '@ionic-native/geolocation';



// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {

//   lat : number;
//   longt: number;

//   @ViewChild('map') mapElement: ElementRef;
//   map: any;
//   geoInfo:any={
//     resp:'',
//     data:''
// };


//   constructor(public navCtrl: NavController,private geolocation: Geolocation) {
 
  
//   }
  
//   ionViewDidLoad(){
//     geolocation: Geolocation
//         this.geolocation.getCurrentPosition().then((resp) => {
//       this.geoInfo.resp=JSON.stringify(resp);
//        resp.coords.latitude;
//        resp.coords.longitude;
//        this.lat = (resp.coords.latitude);
//        this.longt =(resp.coords.longitude);
//        this.loadMap(resp.coords.latitude,resp.coords.longitude);
// console.log(resp.coords.latitude)
// console.log(resp.coords.longitude)

//   }).catch((error) => {
//       console.log('Error getting location', error);
//       this.geoInfo.resp='Error getting location';
//   });

//   }

//   loadMap(s,t){
 
//     let latLng = new google.maps.LatLng(s, t);
 
//     let mapOptions = {
//       center: latLng,
//       zoom: 18,
//       mapTypeId: google.maps.MapTypeId.ROADMAP

    
//     }

//     this.map2 = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//     let marker: google.maps.Marker;
//     marker = new google.maps.Marker({map:this.map,position:latLng});
    
 
//   }
// }


import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})

export class HomePage {

  lat : number;
  longt: number;
@ViewChild('map') mapElement;
map : any;
  geoInfo:any={
    resp:'',
    data:''
};
 constructor(public navCtrl: NavController,private geolocation: Geolocation) {

 }

 ionViewDidLoad(){
  geolocation: Geolocation
          this.geolocation.getCurrentPosition().then((resp) => {
        this.geoInfo.resp=JSON.stringify(resp);
         resp.coords.latitude;
         resp.coords.longitude;
         this.lat = (resp.coords.latitude);
         this.longt =(resp.coords.longitude);
         this.initMap(resp.coords.latitude,resp.coords.longitude);
  
  
    }).catch((error) => {
        console.log('Error getting location', error);
        this.geoInfo.resp='Error getting location';
    });
   
 }

 initMap(s,t){
  console.log(s);
  console.log(t);
  let me=navigator.geolocation.getCurrentPosition(function myfunction(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };})
   let latlang = new google.maps.LatLng(-26.2020262, 28.0521884);
   let mapOptions ={
     center : latlang,
     zoom: 15

   };

   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
   let marker: google.maps.Marker;
   marker = new google.maps.Marker({map:this.map,position:latlang});
 }
}