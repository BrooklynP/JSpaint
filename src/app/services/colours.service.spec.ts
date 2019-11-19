import { TestBed } from '@angular/core/testing';

import { ColoursService } from './colours.service';

describe('ColoursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColoursService = TestBed.get(ColoursService);
    expect(service).toBeTruthy();
  });
});
