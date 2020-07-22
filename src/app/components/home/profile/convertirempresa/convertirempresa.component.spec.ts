import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertirempresaComponent } from './convertirempresa.component';

describe('ConvertirempresaComponent', () => {
  let component: ConvertirempresaComponent;
  let fixture: ComponentFixture<ConvertirempresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertirempresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertirempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
