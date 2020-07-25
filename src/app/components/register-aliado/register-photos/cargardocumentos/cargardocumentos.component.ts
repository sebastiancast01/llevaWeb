import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargardocumentos',
  templateUrl: './cargardocumentos.component.html',
  styleUrls: ['./cargardocumentos.component.css']
})
export class CargardocumentosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado(id) {
    console.log('estado' + (parseFloat(id) + parseFloat('1')))

    if ((parseFloat(id) + parseFloat('1') > 3)) {
      console.log('No se puede')
    } else {
      var IdEstado = 'estado' + (parseFloat(id) + parseFloat('1'))

      var estado = document.getElementById(IdEstado)

      estado.innerHTML = 'Completado'
    }
  }

}
