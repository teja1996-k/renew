import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibiltyComponent } from './eligibilty.component';

describe('EligibiltyComponent', () => {
  let component: EligibiltyComponent;
  let fixture: ComponentFixture<EligibiltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligibiltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibiltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
