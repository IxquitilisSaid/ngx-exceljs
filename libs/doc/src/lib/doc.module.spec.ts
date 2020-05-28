import { async, TestBed } from '@angular/core/testing';
import { DocModule } from './doc.module';

describe('DocModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DocModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DocModule).toBeDefined();
  });
});
