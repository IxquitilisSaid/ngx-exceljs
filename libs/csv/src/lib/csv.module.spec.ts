import { async, TestBed } from '@angular/core/testing';
import { CsvModule } from './csv.module';

describe('CsvModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CsvModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CsvModule).toBeDefined();
  });
});
