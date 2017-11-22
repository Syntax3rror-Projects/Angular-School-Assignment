import { TestBed, inject } from '@angular/core/testing';

import { ExpDatabaseService } from './exp-database.service';

describe('ExpDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpDatabaseService]
    });
  });

  it('should be created', inject([ExpDatabaseService], (service: ExpDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
