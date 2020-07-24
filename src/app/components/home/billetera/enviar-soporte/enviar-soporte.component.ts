import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-enviar-soporte',
  templateUrl: './enviar-soporte.component.html',
  styleUrls: ['./enviar-soporte.component.css']
})
export class EnviarSoporteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EnviarSoporteComponent>,
  ) { }

  ngOnInit(): void {
  }

  regresar(){
    this.dialogRef.close(true);
  }
}
