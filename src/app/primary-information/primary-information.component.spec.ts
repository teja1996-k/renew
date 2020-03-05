import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryInformationComponent } from './primary-information.component';

describe('PrimaryInformationComponent', () => {
  let component: PrimaryInformationComponent;
  let fixture: ComponentFixture<PrimaryInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
