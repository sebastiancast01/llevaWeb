import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';

export interface Billetera {
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

@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.component.html',
  styleUrls: ['./billetera.component.css']
})
export class BilleteraComponent implements OnInit {

  constructor() { }
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

}