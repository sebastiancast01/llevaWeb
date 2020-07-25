import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarSoporteComponent } from './enviar-soporte.component';

describe('EnviarSoporteComponent', () => {
  let component: EnviarSoporteComponent;
  let fixture: ComponentFixture<EnviarSoporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarSoporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
