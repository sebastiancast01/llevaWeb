import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargardocumentosComponent } from './cargardocumentos.component';

describe('CargardocumentosComponent', () => {
  let component: CargardocumentosComponent;
  let fixture: ComponentFixture<CargardocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargardocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargardocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
