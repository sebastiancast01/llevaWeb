import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import{GlobalsService} from '../../globals.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ApiRegisterService} from '../../services/apiRegister/api-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private apiRegister: ApiRegisterService, private router: Router, private _snackBar: MatSnackBar,
              private globals:GlobalsService) { }

  public user_name = null;
  public password = null;
  hide = true;

  ngOnInit() {
    this.globals.logout();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


  login() {
    //this.confirm.set_phone(this.phone);
    let data = {
      'username': this.user_name,
      'password': this.password
    };
    this.apiRegister.login(this, data, this.despuesDeEnviarCodigo, this.errorHanndler);

  }

  registroEmpresa() {
    this.globals.tipo_registro=2;
    this.router.navigate(['/phone'])
  }

  registroPersona() {
    this.globals.tipo_registro=1;
    this.router.navigate(['/phone'])
  }

  despuesDeEnviarCodigo(_this, data) {
    console.log( data.person.name);
    _this.globals.name=data.person.name;
    _this.globals.id=data.person.id;
    _this.globals.setToken(data.access);
    _this.router.navigate(['/home'])
  }

  errorHanndler(_this, data) {
    console.log("error " + data.error.message);
    _this.openSnackBar("Error","Usuario o contraseña incorrectos");
  }
}
