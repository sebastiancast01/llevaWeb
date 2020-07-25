import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-certificado',
  templateUrl: './email-certificado.component.html',
  styleUrls: ['./email-certificado.component.css']
})
export class EmailCertificadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  option(id) {

    var email = document.getElementById('form-email')
    var emailnext = document.getElementById('form-email-next')

    if (id == 'email') {
      email.style.setProperty("display", "flex", "important");
      emailnext.style.display = 'none';
    } else if (id == 'email-next') {
      email.style.display = 'none';
      emailnext.style.setProperty("display", "block", "important");
    }
  }

}
