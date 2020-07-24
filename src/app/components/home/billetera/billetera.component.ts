import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { EnviarSoporteComponent } from './enviar-soporte/enviar-soporte.component'

export interface Billetera {
  fecha: string;
  tipo: string;
  referencia: string;
  valor: number;
  kms: number;
}

export interface Historial {
  fecha: string;
  tipo: string;
  referencia: string;
  valor: number;
  kms: number;
}

const BULLETERA_DATA: Billetera[] = [
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Recarga de salbo billetera', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Compra de plan corporativo', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Recarga de salbo billetera', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Compra de plan corporativo', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Recarga de salbo billetera', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Compra de plan corporativo', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Recarga de salbo billetera', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Compra de plan corporativo', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Recarga de salbo billetera', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Compra de plan corporativo', valor: 125.990, kms: 0.2 },
];

const HISTORIAL_DATA: Historial[] = [
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Recarga de salbo billetera', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Compra de plan corporativo', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Recarga de salbo billetera', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Compra de plan corporativo', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Recarga de salbo billetera', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Compra de plan corporativo', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Recarga de salbo billetera', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Compra de plan corporativo', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Recarga de salbo billetera', valor: 125.990, kms: 0.2 },
  { fecha: '2020-05-11 / 10:20', tipo: 'Hydrogen', referencia: 'Compra de plan corporativo', valor: 125.990, kms: 0.2 },
];

@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.component.html',
  styleUrls: ['./billetera.component.css']
})
export class BilleteraComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  displayedColumns: string[] = ['select', 'fecha', 'tipo', 'referencia', 'valor', 'kms'];
  dataSource = new MatTableDataSource(BULLETERA_DATA);
  selection = new SelectionModel<Billetera>(true, []);

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    console.log(this.dataSource)
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Billetera): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.fecha + 1}`;
  }


  option(id) {
    var elemento = document.getElementsByClassName('option')
    for (var i = 0, len = elemento.length; i < len; i = i + 1) {
      elemento[i].classList.remove("active")
    }

    if (id != 'soporte' && id != 'email-next') {
      var addcolor = document.getElementById(id)
      addcolor.classList.add("active")
    }

    var billetera = document.getElementById('form-billetera')
    var historial = document.getElementById('form-historial')
    var servicio = document.getElementById('form-servicio')
    var email = document.getElementById('form-email')
    var soporte = document.getElementById('form-soporte')
    var emailnext = document.getElementById('form-email-next')

    if (id == 'billetera') {
      billetera.style.setProperty("display", "flex", "important");
      historial.style.display = 'none'
      servicio.style.display = 'none'
      email.style.display = 'none'
      soporte.style.display = 'none'
      emailnext.style.display = 'none'
    } else if (id == 'historial') {
      billetera.style.display = 'none'
      historial.style.setProperty("display", "flex", "important");
      servicio.style.display = 'none'
      email.style.display = 'none'
      soporte.style.display = 'none'
      emailnext.style.display = 'none'
    } else if (id == 'servicio') {
      billetera.style.display = 'none'
      historial.style.display = 'none'
      servicio.style.setProperty("display", "flex", "important");
      email.style.display = 'none'
      soporte.style.display = 'none'
      emailnext.style.display = 'none'
    } else if (id == 'email') {
      billetera.style.display = 'none'
      historial.style.display = 'none'
      servicio.style.display = 'none'
      email.style.setProperty("display", "flex", "important");
      soporte.style.display = 'none'
      emailnext.style.display = 'none'
    } else if (id == 'soporte') {
      billetera.style.display = 'none'
      historial.style.display = 'none'
      servicio.style.display = 'none'
      soporte.style.setProperty("display", "flex", "important");
      email.style.display = 'none'
      emailnext.style.display = 'none'
    }else if (id == 'email-next') {
      billetera.style.display = 'none'
      historial.style.display = 'none'
      servicio.style.display = 'none'
      email.style.display = 'none'
      soporte.style.display = 'none'
      emailnext.style.setProperty("display", "flex", "important");
    }
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
          console.log('Guardado');
        }
      });
  }

}

export interface Element {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}
