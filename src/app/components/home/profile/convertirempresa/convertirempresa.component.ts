import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { SolicitudenviadaComponent } from './solicitudenviada/solicitudenviada.component';

@Component({
  selector: 'app-convertirempresa',
  templateUrl: './convertirempresa.component.html',
  styleUrls: ['./convertirempresa.component.css']
})
export class ConvertirempresaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConvertirempresaComponent>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  enviar() {
    const dialogRef = this.dialog.open(SolicitudenviadaComponent, {
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

    this.dialogRef.close(true);
  }
}
