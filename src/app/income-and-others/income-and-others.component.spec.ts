import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeAndOthersComponent } from './income-and-others.component';

describe('IncomeAndOthersComponent', () => {
  let component: IncomeAndOthersComponent;
  let fixture: ComponentFixture<IncomeAndOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeAndOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeAndOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
