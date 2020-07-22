import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EliminarComponent>,
  ) { }

  ngOnInit(): void {
  }

  eliminar(){
    this.dialogRef.close(true);
  }

}
