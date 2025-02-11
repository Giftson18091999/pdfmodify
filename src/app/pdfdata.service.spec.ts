import { TestBed } from '@angular/core/testing';

import { PdfdataService } from './pdfdata.service';

describe('PdfdataService', () => {
  let service: PdfdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
