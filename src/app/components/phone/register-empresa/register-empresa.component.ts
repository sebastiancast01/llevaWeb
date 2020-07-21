import { Component, OnInit } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import {ApiRegisterService} from '../../../services/apiRegister/api-register.service';
import {Router} from '@angular/router';
import{GlobalsService} from '../../../globals.service';

@Component({
  selector: 'app-register-empresa',
  templateUrl: './register-empresa.component.html',
  styleUrls: ['./register-empresa.component.css']
})
export class RegisterEmpresaComponent implements OnInit {

  hide=true


  constructor(public apiRegister: ApiRegisterService, public router: Router, private _snackBar: MatSnackBar,
              public globals:GlobalsService) { }


  public phone = null;
  public email = null;
  public secret_phone = null;
  public country = null;
  public state = null;
  public city = null;
  public name = null;
  public person_type = null;
  public password = null;
  public date_birth = null;
  public number_document = null;
  public code_refer = null;
  public code_pais = null;
  public sms_code = null;
  public doc_type=1;
  public average=1;
  public name_contact=null;


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


  registrar() {
    //this.confirm.set_phone(this.phone);

    let data = {


      'phone' :  this.globals.phone,
      'email' :  this.email,
      'secret_phone' :  this.globals.secret_phone,
      'country' : "Colombia",
      'state' : "Atlantico",
      'city' : this.city,
      'name' : this.name,
      'person_type' : "2",
      'password' : this.password,
      'date_birth' : "2020-06-20",
      'number_document' : this.number_document,
      'code_refer' : "00000",
      'code_pais' : "57",
      'sms_code' :  this.globals.sms_code,
      "doc_type":1,
      "average":1,
      "name_contact":""
    };
    this.apiRegister.register(this, data, this.despuesDeEnviarDatos, this.errorHanndler);
  }

  despuesDeEnviarDatos(_this, data) {
    console.log("Registro exitoso" + data);
    _this.globals.name=_this.name;
    _this.openSnackBar("Registro Exitoso","");

    _this.router.navigate(['/home'])
  }

  errorHanndler(_this, data) {
    console.log("error " + data.error.message);
    _this.openSnackBar("Error",data.error.message);
  }
  ngOnInit(): void {
  }
  set_phone(phone){
    this.phone=phone;
  }
}

