import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTermsComponent } from './pricing-terms.component';

describe('PricingTermsComponent', () => {
  let component: PricingTermsComponent;
  let fixture: ComponentFixture<PricingTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
