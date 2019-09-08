import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertOutletComponent } from './alert-outlet.component';

describe('AlertOutletComponent', () => {
  let component: AlertOutletComponent;
  let fixture: ComponentFixture<AlertOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
