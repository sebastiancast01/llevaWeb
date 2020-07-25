import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomienda',
  templateUrl: './recomienda.component.html',
  styleUrls: ['./recomienda.component.css']
})
export class RecomiendaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  codigo() {
    console.log('codigo')
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById('copy').innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

    var msj = document.getElementById('msj-copy')
    msj.style.display = 'block'

    setTimeout(function () { msj.style.display = 'none'; }, 3000);
  }
}
