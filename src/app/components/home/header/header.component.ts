import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import{GlobalsService} from '../../../globals.service';
import {Router} from '@angular/router';
import {  ViewChild,Directive } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import {MapComponent} from '../map/map.component';
import {MatDialog} from '@angular/material/dialog';
// import {ApiRegisterService} from '../../../services/apiRegister/api-register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public globals:GlobalsService, private router: Router, 
    // public servi:ApiRegisterService
    ) { }
  nombre=this.globals.name;

  ngOnInit(): void {
    this.nombre = this.globals.getUser();

  }
  logout(){
    this.globals.logout();
    this.router.navigate(['']);
  }
}
