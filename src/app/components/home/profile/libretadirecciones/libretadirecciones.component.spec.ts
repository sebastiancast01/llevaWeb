import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibretadireccionesComponent } from './libretadirecciones.component';

describe('LibretadireccionesComponent', () => {
  let component: LibretadireccionesComponent;
  let fixture: ComponentFixture<LibretadireccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibretadireccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibretadireccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
