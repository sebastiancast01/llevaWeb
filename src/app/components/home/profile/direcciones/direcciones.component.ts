import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { LibretadireccionesComponent } from '../libretadirecciones/libretadirecciones.component';
import { EliminarComponent } from '../libretadirecciones/eliminar/eliminar.component';
@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.css']
})
export class DireccionesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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
