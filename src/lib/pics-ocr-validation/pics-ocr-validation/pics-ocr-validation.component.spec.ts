import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsOcrValidationComponent } from './pics-ocr-validation.component';

describe('PicsOcrValidationComponent', () => {
  let component: PicsOcrValidationComponent;
  let fixture: ComponentFixture<PicsOcrValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicsOcrValidationComponent]
    });
    fixture = TestBed.createComponent(PicsOcrValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
