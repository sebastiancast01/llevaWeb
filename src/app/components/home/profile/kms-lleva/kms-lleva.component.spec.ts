import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmsLlevaComponent } from './kms-lleva.component';

describe('KmsLlevaComponent', () => {
  let component: KmsLlevaComponent;
  let fixture: ComponentFixture<KmsLlevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmsLlevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmsLlevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
