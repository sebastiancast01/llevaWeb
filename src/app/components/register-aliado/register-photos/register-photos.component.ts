import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-photos',
  templateUrl: './register-photos.component.html',
  styleUrls: ['./register-photos.component.css']
})
export class RegisterPhotosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado(id) {
    console.log('estado' + (parseFloat(id) + parseFloat('1')))

    if ((parseFloat(id) + parseFloat('1') > 7)) {
      console.log('No se puede')
    } else {
      var IdEstado = 'estado' + (parseFloat(id) + parseFloat('1'))

      var estado = document.getElementById(IdEstado)

      estado.innerHTML = 'Completado'
    }
  }

}
