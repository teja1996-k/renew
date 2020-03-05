import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpSampleComponent } from './otp-sample.component';

describe('OtpSampleComponent', () => {
  let component: OtpSampleComponent;
  let fixture: ComponentFixture<OtpSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
