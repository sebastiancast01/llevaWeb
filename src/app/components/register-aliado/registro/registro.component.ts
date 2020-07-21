import { Component, OnInit } from '@angular/core';

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
    {value: 'Barranquilla', viewValue: 'Barranquilla'},
    {value: 'Soledad', viewValue: 'Soledad'},
    {value: 'Bogota', viewValue: 'Bogota'}
  ];

  nacionalidad: nacional[] = [
    {value: 'Colombiano', viewValue: 'Colombiano'},
    {value: 'Venezolano', viewValue: 'Venezolano'}
    ];  constructor() { }

  ngOnInit(): void {
  }

}
