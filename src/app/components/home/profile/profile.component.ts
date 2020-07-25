import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { CambiarclaveComponent } from './cambiarclave/cambiarclave.component';
import { ActualizardatosComponent } from './actualizardatos/actualizardatos.component';
import { ConvertirempresaComponent } from './convertirempresa/convertirempresa.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  cambiarClave() {
    const dialogRef = this.dialog.open(CambiarclaveComponent, {
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

  actualizar() {
    const dialogRef = this.dialog.open(ActualizardatosComponent, {
      width: '300px',
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

  convertirEmpresa() {
    const dialogRef = this.dialog.open(ConvertirempresaComponent, {
      width: '700px',
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

  codigo() {
    console.log('codigo')
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById('copy').innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

    var msj = document.getElementById('msj-copy')
    msj.style.display = 'block'

    setTimeout(function () { msj.style.display = 'none'; }, 3000);
  }
}
