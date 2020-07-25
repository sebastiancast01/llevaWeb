import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCertificadoComponent } from './email-certificado.component';

describe('EmailCertificadoComponent', () => {
  let component: EmailCertificadoComponent;
  let fixture: ComponentFixture<EmailCertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailCertificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
