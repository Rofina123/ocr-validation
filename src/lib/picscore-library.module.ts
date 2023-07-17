import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { PicscoreLibraryComponent } from './picscore-library.component';
import { CardModule } from 'primeng/card';
import { PicsOcrValidationComponent } from './pics-ocr-validation/pics-ocr-validation/pics-ocr-validation.component';




@NgModule({
  declarations: [
    PicscoreLibraryComponent,
    PicsOcrValidationComponent
  ],
  imports: [
    CardModule
  ],
  exports: [
    PicscoreLibraryComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class PicscoreLibraryModule { }
