import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudenviadaComponent } from './solicitudenviada.component';

describe('SolicitudenviadaComponent', () => {
  let component: SolicitudenviadaComponent;
  let fixture: ComponentFixture<SolicitudenviadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudenviadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudenviadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
