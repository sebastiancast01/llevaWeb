import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomiendaComponent } from './recomienda.component';

describe('RecomiendaComponent', () => {
  let component: RecomiendaComponent;
  let fixture: ComponentFixture<RecomiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomiendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
