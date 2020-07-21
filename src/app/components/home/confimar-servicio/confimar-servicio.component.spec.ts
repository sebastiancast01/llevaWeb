import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimarServicioComponent } from './confimar-servicio.component';

describe('ConfimarServicioComponent', () => {
  let component: ConfimarServicioComponent;
  let fixture: ComponentFixture<ConfimarServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfimarServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfimarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
