import { Component, OnInit } from '@angular/core';
// import {ApiRegisterService} from '../../../services/apiRegister/api-register.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import{GlobalsService} from '../../../globals.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(
    // public apiRegister: ApiRegisterService,
     public router: Router, private _snackBar: MatSnackBar,
              public globals:GlobalsService) { }
  phone=this.globals.phone;

  code_pais = "57";
  n1=null;
  n2=null;
  n3=null;
  n4=null;
  n5=null;
  sms_code=null;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  enviarCodigo() {
    //this.confirm.set_phone(this.phone);
    let data = {
      'code_pais': this.code_pais,
      'phone': this.phone
    };

    // this.apiRegister.sendCodePhone(this, data, this.reenviarCodigo, this.errorReenvio);

  }



  reenviarCodigo(_this, data) {
    _this.openSnackBar("Codigo enviado Nuevamente","");

  }

  errorReenvio(_this, data) {
  }
  validarCodigo() {
    //this.confirm.set_phone(this.phone);
    this.sms_code = this.n1+""+this.n2+""+this.n3+""+this.n4+""+this.n5;

    let data = {
      'code_pais': this.code_pais,
      'phone': this.phone,
      'sms_code': this.sms_code
    };
    let phone= this.globals.phone;

    // this.apiRegister.valCodePhone(this, data, this.despuesDeEnviarCodigo, this.errorHanndler);
  }



  despuesDeEnviarCodigo(_this, data) {
    console.log("Codigo confirmado" + data);
    _this.globals.sms_code=_this.sms_code;
    _this.globals.secret_phone=data.secrect_phone;
    if(_this.globals.tipo_registro==1){
      _this.router.navigate(['/register-person']);

    }else{
      _this.router.navigate(['/register-empresa']);

    }
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
