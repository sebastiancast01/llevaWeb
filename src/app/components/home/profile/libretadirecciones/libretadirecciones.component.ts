import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-libretadirecciones',
  templateUrl: './libretadirecciones.component.html',
  styleUrls: ['./libretadirecciones.component.css']
})
export class LibretadireccionesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LibretadireccionesComponent>,
  ) { }

  ngOnInit(): void {
  }

  guardar() {
    this.dialogRef.close(true);
  }

}
