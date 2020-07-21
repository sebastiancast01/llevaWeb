import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalsService } from '../../globals.service';
import { Router } from '@angular/router';
import { ViewChild, Directive } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { MapComponent } from './map/map.component';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ConfimarServicioComponent } from './confimar-servicio/confimar-servicio.component';
// import {ApiRegisterService} from '../../services/apiRegister/api-register.service';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent implements OnInit {

  @ViewChild(MapComponent) public hijo: MapComponent;
  constructor(public globals: GlobalsService, private router: Router,
    public dialog: MatDialog
    // , public servi:ApiRegisterService
  ) { }
  tamanoPaquete: any[] = [];
  tipoServicio: any[] = [];
  panelOpenState = false;
  nombre = this.globals.name;
  id_user = this.globals.id;
  solicitado = false;
  resumen = false;
  especificaciones = "reger";
  especificaciones2 = "erwtert";
  options = {
    types: [],
    componentRestrictions: { country: 'CO' }
  }
  ngOnInit(): void {
    console.log(this.globals.getToken());
    this.nombre = this.globals.getUser();
    this.id_user = this.globals.getId();
    this.listar();
    this.tipoServi();

  }
  logout() {
    this.globals.logout();
    this.router.navigate(['']);
  }
  solicitar() {
    this.solicitado = true;
    this.resumen = true;
    this.pedido();
  }
  cancelar() {
    this.solicitado = false;
    this.resumen = false;
  }
  doAddressChange(address: Address) {
    this.hijo.handleAddressChange(address);
  }
  doAddressChangeOrigin(address: Address) {
    this.hijo.handleAddressChangeOrigin(address);
  }
  listar() {
    // this.servi.tamano(this, this.servi.urls.tamanoPaquete, this.succes, this.errorHanndler);
  }

  succes(_this, data) {
    _this.tamanoPaquete = data.data;

  }

  errorHanndler(_this, data) {
    console.log("error " + data.error.message);
  }
  tipoServi() {
    // this.servi.tipo(this, this.servi.urls.tamanoPaquete, this.succesTipo, this.errorHanndlerTipo);
  }

  succesTipo(_this, data) {
    _this.tipoServicio = data.data;

  }

  errorHanndlerTipo(_this, data) {
    console.log("error " + data.error.message);
  }

  pedido() {
    let data = {
      "service_type": 1,
      "package_size": 1,
      "distanace_traveled": this.hijo.distancia,
      "total_value": this.hijo.valor,
      "qualification": 0,
      "client_id": this.id_user,
      "list_address": [{
        "latitude": 10,
        "longitude": 10,
        "address": this.hijo.dirOrigen,
        "specification": this.especificaciones,
        "instructions": "casa de esquina"
      }, {
        "latitude": 10,
        "longitude": 10,
        "address": this.hijo.dirDestino,
        "specification": this.especificaciones2,
        "instructions": "casa de esquina"
      }]
    };
    console.log(data.client_id);
    // this.servi.pedido(this, data, this.succesPedido, this.errorHanndlerPedido);
  }

  succesPedido(_this, data) {
    _this.tamanoPaquete = data.data;
    console.log("servicio solicitado " + data);

  }

  errorHanndlerPedido(_this, data) {
    console.log("error " + data.error.message);
  }

  confirmarServicio() {
    const dialogRef = this.dialog.open(ConfimarServicioComponent, {
      width: '400px',
      data: { mode: 'create' }
    });

    dialogRef.afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) {
          console.log('Cerrado');
        } else {
          console.log('Guardado');
        }
      });
  }
}
