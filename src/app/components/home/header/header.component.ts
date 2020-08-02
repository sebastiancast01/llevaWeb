import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalsService } from '../../../globals.service';
import { Router } from '@angular/router';
import { ViewChild, Directive } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { MapComponent } from '../map/map.component';
import { MatDialog } from '@angular/material/dialog';
// import {ApiRegisterService} from '../../../services/apiRegister/api-register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public globals: GlobalsService, private router: Router,
    // public servi:ApiRegisterService
  ) { }
  nombre = this.globals.name;

  ngOnInit(): void {
    this.nombre = this.globals.getUser();

  }

  verMenu() {
    console.log('ver menu')
    var menu = document.getElementById('menu');
    var close = document.getElementById('close-menu');
    var bars = document.getElementById('bars');

    menu.style.display = 'block';
    close.style.display = 'block';
    bars.style.display = 'none';
  }

  closeMenu() {
    console.log('close menu')
    var menu = document.getElementById('menu');
    var close = document.getElementById('close-menu');
    var bars = document.getElementById('bars');

    menu.style.display = 'none';
    close.style.display = 'none';
    bars.style.display = 'block';
  }

  logout() {
    this.globals.logout();
    this.router.navigate(['']);
  }
}
