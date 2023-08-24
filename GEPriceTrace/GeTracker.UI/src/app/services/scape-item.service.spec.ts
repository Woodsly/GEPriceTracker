import { TestBed } from '@angular/core/testing';

import { ScapeItemService } from './scape-item.service';

describe('ScapeItemService', () => {
  let service: ScapeItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScapeItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
