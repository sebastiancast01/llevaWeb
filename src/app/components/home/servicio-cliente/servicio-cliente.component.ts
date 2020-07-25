import { Component, OnInit } from '@angular/core';
import { EnviarSoporteComponent } from './enviar-soporte/enviar-soporte.component';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-servicio-cliente',
  templateUrl: './servicio-cliente.component.html',
  styleUrls: ['./servicio-cliente.component.css']
})
export class ServicioClienteComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  enviarSoporte() {
    const dialogRef = this.dialog.open(EnviarSoporteComponent, {
      width: '300px',
      data: { mode: 'create' }
    });

    dialogRef.afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) {
          console.log('Cerrado');
        } else {
          this.option('soporte')
        }
      });
  }

  option(id) {

    var servicio = document.getElementById('form-servicio')
    var soporte = document.getElementById('form-soporte')

    if (id == 'servicio') {
      servicio.style.setProperty("display", "flex", "important");
      soporte.style.display = 'none'
    } else if (id == 'soporte') {
      servicio.style.display = 'none'
      soporte.style.setProperty("display", "flex", "important");
    }
  }

}
