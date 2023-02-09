import { TestBed } from '@angular/core/testing';

import { ParagraphsService } from './paragraphs.service';

describe('ParagraphsService', () => {
  let service: ParagraphsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParagraphsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
