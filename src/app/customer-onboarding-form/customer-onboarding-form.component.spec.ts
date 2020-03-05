import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOnboardingFormComponent } from './customer-onboarding-form.component';

describe('CustomerOnboardingFormComponent', () => {
  let component: CustomerOnboardingFormComponent;
  let fixture: ComponentFixture<CustomerOnboardingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOnboardingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOnboardingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
