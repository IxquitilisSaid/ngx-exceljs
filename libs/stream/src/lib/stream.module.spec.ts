import { async, TestBed } from '@angular/core/testing';
import { StreamModule } from './stream.module';

describe('StreamModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StreamModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StreamModule).toBeDefined();
  });
});
