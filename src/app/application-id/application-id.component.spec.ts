import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationIdComponent } from './application-id.component';

describe('ApplicationIdComponent', () => {
  let component: ApplicationIdComponent;
  let fixture: ComponentFixture<ApplicationIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
