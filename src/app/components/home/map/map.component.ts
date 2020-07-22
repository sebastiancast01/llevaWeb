import {Component, OnInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {AgmMap} from '@agm/core';
import {GlobalsService} from '../../../globals.service';
import {Router} from '@angular/router';
// import {ApiRegisterService} from '../../../services/apiRegister/api-register.service';
import Global = WebAssembly.Global;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'angular-maps';
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  options = {
    types: [],
    componentRestrictions: {country: 'CO', postalCode: '080003'}
  };

  origin: any;
  destination: any;
  latitude;
  longitude;
  zoom;
  name;
  public dirOrigen;
  public  dirDestino;
  public distancia;
  public valor=0;
  distance: 0;
  data = {
    'service_type': 1,
    'distance_traveled': 1
  };

  ngOnInit() {
    this.setCurrentLocation();
  }
  constructor(public globals:GlobalsService
    // public servi:ApiRegisterService
    ) {

  }
  getDirection(lat, lng) {

    this.origin = {lat: lat, lng: lng};
    this.destination = {lat: lat, lng: lng};
  }

  public handleAddressChangeOrigin(address: Address) {
    // Do some stuff
    console.log(address.name);
    this.origin = {lat: address.geometry.location.lat(), lng: address.geometry.location.lng()};
    this.destination.la;
    console.log('Latitud : ' + this.origin.lat);
    console.log('Longitud : ' + this.origin.lng);
  }

  public handleAddressChange(address: Address) {
    // Do some stuff
    console.log(address.name);
    this.name=address.name;
    this.destination = {lat: address.geometry.location.lat(), lng: address.geometry.location.lng()};
    this.destination.la;
   // console.log('Latitud : ' + this.origin.lat);
  //  console.log('Longitud : ' + this.origin.lng);
  }
  public renderOptions = {
    suppressMarkers: true,
  };

  public onChange(event: any) {
    console.log(event);
    // You can do anything.
  }

  public markerOptions = {
    origin: {
      icon: '../../../assets/home/icono.png',
      draggable: true,
    },
    destination: {
      icon: '../../../assets/home/icono.png',
      draggable: true
    },
  };

  public setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
        this.getDirection(this.latitude, this.longitude);

      });
    }
  }

  onDrag($event: any) {
    this.globals.latitud=this.origin.lat;
    this.globals.longitud=this.origin.lng;
    this.globals.latitud2=this.destination.lat;
    this.globals.logitud2=this.destination.lng;
    this.data.distance_traveled=Math.round($event.routes[0].legs[0].distance.value/1000);
    this.globals.direccion=$event.routes[0].legs[0].start_address;
    this.globals.direccion2=$event.routes[0].legs[0].end_address;
    this.globals.distancia=$event.routes[0].legs[0].distance.text;
    console.log($event.routes[0].legs[0].distance.text);
    console.log($event.routes[0].legs[0].duration.text);
    console.log('Dirección de origen: '+$event.routes[0].legs[0].start_address);
    this.dirOrigen=$event.routes[0].legs[0].start_address;
    console.log('Dirección de destino: '+$event.routes[0].legs[0].end_address);
    this.dirDestino=$event.routes[0].legs[0].end_address;
    console.log(Math.round($event.routes[0].legs[0].distance.value/1000));
    this.distancia=Math.round($event.routes[0].legs[0].distance.value/1000);
    // this.servi.valor(this, this.data ,this.despuesDeEnviarCodigo,this.errorHanndler);
  }

  despuesDeEnviarCodigo(_this, data) {
    console.log("valor calculado con exito :$" + data.total_cost);
    _this.valor=data.total_cost;
  }

  errorHanndler(_this, data) {
    console.log("error "+data );
  }
  getValor(){
    return this.valor;
  }
}
