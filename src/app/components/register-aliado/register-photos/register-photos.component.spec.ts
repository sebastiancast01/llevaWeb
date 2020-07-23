import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPhotosComponent } from './register-photos.component';

describe('RegisterPhotosComponent', () => {
  let component: RegisterPhotosComponent;
  let fixture: ComponentFixture<RegisterPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
