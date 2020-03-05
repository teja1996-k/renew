import { TestBed } from '@angular/core/testing';

import { DropdownApisService } from './dropdown-apis.service';

describe('DropdownApisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DropdownApisService = TestBed.get(DropdownApisService);
    expect(service).toBeTruthy();
  });
});
