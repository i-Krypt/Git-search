import { TestBed } from '@angular/core/testing';

import { ServiceOneService } from './serviceOne.service';

describe('Service1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceOneService = TestBed.get(ServiceOneService);
    expect(service).toBeTruthy();
  });
});
