import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-actualizardatos',
  templateUrl: './actualizardatos.component.html',
  styleUrls: ['./actualizardatos.component.css']
})
export class ActualizardatosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ActualizardatosComponent>,
  ) { }

  ngOnInit(): void {
  }

  aceptar(){
    this.dialogRef.close(true);
  }

}
