import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicscoreLibraryComponent } from './picscore-library.component';

describe('PicscoreLibraryComponent', () => {
  let component: PicscoreLibraryComponent;
  let fixture: ComponentFixture<PicscoreLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicscoreLibraryComponent]
    });
    fixture = TestBed.createComponent(PicscoreLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
