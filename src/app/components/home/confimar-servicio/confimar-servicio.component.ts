import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confimar-servicio',
  templateUrl: './confimar-servicio.component.html',
  styleUrls: ['./confimar-servicio.component.css']
})
export class ConfimarServicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  verSaldo(){
    var saldo = document.getElementById('saldo');
    var efectivo = document.getElementById('efectivo');
    var credito = document.getElementById('credito');

    saldo.style.display = 'block';
    efectivo.style.display = 'none';
    credito.style.display = 'none';
  }

  verEfectivo(){
    var saldo = document.getElementById('saldo');
    var efectivo = document.getElementById('efectivo');
    var credito = document.getElementById('credito');

    saldo.style.display = 'none';
    efectivo.style.display = 'block';
    credito.style.display = 'none';
  }

  verCredito(){
    var saldo = document.getElementById('saldo');
    var efectivo = document.getElementById('efectivo');
    var credito = document.getElementById('credito');

    saldo.style.display = 'none';
    efectivo.style.display = 'none';
    credito.style.display = 'block';
  }

}
