import { async, TestBed } from '@angular/core/testing';
import { XlsxModule } from './xlsx.module';

describe('XlsxModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [XlsxModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(XlsxModule).toBeDefined();
  });
});
