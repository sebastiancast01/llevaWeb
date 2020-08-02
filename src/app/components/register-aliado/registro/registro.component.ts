import { Component, OnInit } from '@angular/core';
import { ReferidoComponent } from './referido/referido.component';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

interface city {
  value: string;
  viewValue: string;
}
interface nacional {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  foods: city[] = [
    { value: 'Barranquilla', viewValue: 'Barranquilla' },
    { value: 'Soledad', viewValue: 'Soledad' },
    { value: 'Bogota', viewValue: 'Bogota' }
  ];

  nacionalidad: nacional[] = [
    { value: 'Colombiano', viewValue: 'Colombiano' },
    { value: 'Venezolano', viewValue: 'Venezolano' }
  ]; constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.referido()
  }

  referido() {
    const dialogRef = this.dialog.open(ReferidoComponent, {
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
