import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSummaryComponent } from './super-summary.component';

describe('SuperSummaryComponent', () => {
  let component: SuperSummaryComponent;
  let fixture: ComponentFixture<SuperSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
