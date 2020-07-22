import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-solicitudenviada',
  templateUrl: './solicitudenviada.component.html',
  styleUrls: ['./solicitudenviada.component.css']
})
export class SolicitudenviadaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SolicitudenviadaComponent>,
  ) { }

  ngOnInit(): void {
  }

  aceptar() {
    this.dialogRef.close(true);
  }

}
