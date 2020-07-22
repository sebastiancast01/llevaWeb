
import {Component, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {ApiRegisterService} from '../../services/apiRegister/api-register.service';
import {ConfirmComponent} from './confirm/confirm.component';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import{GlobalsService} from '../../globals.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {
  @ViewChild("confirm")
  public confirm: ConfirmComponent;

  constructor(
    // public apiRegister: ApiRegisterService,
     public router: Router, private _snackBar: MatSnackBar,
              public globals:GlobalsService) {
  }

  public phone = null;
  code_pais = "57";


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

    // this.apiRegister.sendCodePhone(this, data, this.despuesDeEnviarCodigo, this.errorHanndler);

  }

  despuesDeEnviarCodigo(_this, data) {
    console.log("codigo enviado con exito " + data);
    _this.globals.phone=_this.phone;
    _this.openSnackBar("Código enviado con éxito","");

    _this.router.navigate(['/confirm'])
  }

  errorHanndler(_this, data) {
    console.log("error " + data.error.message);
    _this.openSnackBar("Error",data.error.message);
  }
}
