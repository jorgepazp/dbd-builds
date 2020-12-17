import { TestBed } from '@angular/core/testing';

import { DbdApiService } from './dbd-api.service';

describe('DbdApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbdApiService = TestBed.get(DbdApiService);
    expect(service).toBeTruthy();
  });
});
