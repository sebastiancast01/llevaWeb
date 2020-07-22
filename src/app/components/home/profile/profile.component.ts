import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { CambiarclaveComponent } from './cambiarclave/cambiarclave.component';
import { ActualizardatosComponent } from './actualizardatos/actualizardatos.component';
import { ConvertirempresaComponent } from './convertirempresa/convertirempresa.component';
import { LibretadireccionesComponent } from './libretadirecciones/libretadirecciones.component';
import { EliminarComponent } from './libretadirecciones/eliminar/eliminar.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  option(id) {
    var elemento = document.getElementsByClassName('option')
    for (var i = 0, len = elemento.length; i < len; i = i + 1) {
      elemento[i].classList.remove("active")
    }

    var addcolor = document.getElementById(id)
    addcolor.classList.add("active")

    var cuenta = document.getElementById('form-cuenta')
    var direccion = document.getElementById('form-direccion')
    var kms = document.getElementById('form-kms')
    var recomienda = document.getElementById('form-recomienda')
    if (id == 'cuenta') {
      cuenta.style.setProperty("display", "flex", "important");
      direccion.style.display = 'none'
      kms.style.display = 'none'
      recomienda.style.display = 'none'
    } else if (id == 'direccion') {
      cuenta.style.display = 'none'
      direccion.style.setProperty("display", "flex", "important");
      kms.style.display = 'none'
      recomienda.style.display = 'none'
    } else if (id == 'kms') {
      cuenta.style.display = 'none'
      direccion.style.display = 'none'
      kms.style.setProperty("display", "flex", "important");
      recomienda.style.display = 'none'
    } else if (id == 'recomienda') {
      cuenta.style.display = 'none'
      direccion.style.display = 'none'
      kms.style.display = 'none'
      recomienda.style.setProperty("display", "flex", "important");
    }
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

  agregarDireccion() {
    const dialogRef = this.dialog.open(LibretadireccionesComponent, {
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

  eliminarDireccion() {
    const dialogRef = this.dialog.open(EliminarComponent, {
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
}
