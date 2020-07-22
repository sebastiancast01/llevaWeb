import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cambiarclave',
  templateUrl: './cambiarclave.component.html',
  styleUrls: ['./cambiarclave.component.css']
})
export class CambiarclaveComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CambiarclaveComponent>,
  ) { }

  ngOnInit(): void {
  }

  guardar(){
    this.dialogRef.close(true);
  }

}
