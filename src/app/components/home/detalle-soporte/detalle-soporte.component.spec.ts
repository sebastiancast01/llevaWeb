import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSoporteComponent } from './detalle-soporte.component';

describe('DetalleSoporteComponent', () => {
  let component: DetalleSoporteComponent;
  let fixture: ComponentFixture<DetalleSoporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleSoporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
