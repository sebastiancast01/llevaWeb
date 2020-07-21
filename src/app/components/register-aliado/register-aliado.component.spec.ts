import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAliadoComponent } from './register-aliado.component';

describe('RegisterAliadoComponent', () => {
  let component: RegisterAliadoComponent;
  let fixture: ComponentFixture<RegisterAliadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAliadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
