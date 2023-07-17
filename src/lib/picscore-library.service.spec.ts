import { TestBed } from '@angular/core/testing';

import { PicscoreLibraryService } from './picscore-library.service';

describe('PicscoreLibraryService', () => {
  let service: PicscoreLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicscoreLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
