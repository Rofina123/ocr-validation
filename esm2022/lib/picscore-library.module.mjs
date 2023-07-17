import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { PicscoreLibraryComponent } from './picscore-library.component';
import { CardModule } from 'primeng/card';
import { PicsOcrValidationComponent } from './pics-ocr-validation/pics-ocr-validation/pics-ocr-validation.component';
import * as i0 from "@angular/core";
export class PicscoreLibraryModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PicscoreLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: PicscoreLibraryModule, declarations: [PicscoreLibraryComponent,
            PicsOcrValidationComponent], imports: [CardModule], exports: [PicscoreLibraryComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PicscoreLibraryModule, imports: [CardModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PicscoreLibraryModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljc2NvcmUtbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzY29yZS1saWJyYXJ5L3NyYy9saWIvcGljc2NvcmUtbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlFQUF5RSxDQUFDOztBQWtCckgsTUFBTSxPQUFPLHFCQUFxQjs4R0FBckIscUJBQXFCOytHQUFyQixxQkFBcUIsaUJBWDlCLHdCQUF3QjtZQUN4QiwwQkFBMEIsYUFHMUIsVUFBVSxhQUdWLHdCQUF3QjsrR0FJZixxQkFBcUIsWUFQOUIsVUFBVTs7MkZBT0QscUJBQXFCO2tCQWJqQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix3QkFBd0I7d0JBQ3hCLDBCQUEwQjtxQkFDM0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFVBQVU7cUJBQ1g7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsZ0JBQWdCLENBQUM7aUJBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBpY3Njb3JlTGlicmFyeUNvbXBvbmVudCB9IGZyb20gJy4vcGljc2NvcmUtbGlicmFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvY2FyZCc7XG5pbXBvcnQgeyBQaWNzT2NyVmFsaWRhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcGljcy1vY3ItdmFsaWRhdGlvbi9waWNzLW9jci12YWxpZGF0aW9uL3BpY3Mtb2NyLXZhbGlkYXRpb24uY29tcG9uZW50JztcblxuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUGljc2NvcmVMaWJyYXJ5Q29tcG9uZW50LFxuICAgIFBpY3NPY3JWYWxpZGF0aW9uQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDYXJkTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQaWNzY29yZUxpYnJhcnlDb21wb25lbnRcbiAgXSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIFBpY3Njb3JlTGlicmFyeU1vZHVsZSB7IH1cbiJdfQ==