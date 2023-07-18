import * as i0 from '@angular/core';
import { Injectable, Component, ViewChild, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import * as i1 from 'primeng/card';
import { CardModule } from 'primeng/card';

class PicscoreLibraryService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PicscoreLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PicscoreLibraryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PicscoreLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class PicsOcrValidationComponent {
    constructor() {
        this.isformIO = false;
        this.isReadOnly = false;
        this.formJson = [];
    }
    ngOnInit() {
    }
    backToForm() {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PicsOcrValidationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: PicsOcrValidationComponent, selector: "lib-pics-ocr-validation", inputs: { submitionData: "submitionData" }, viewQueries: [{ propertyName: "isReadOnly", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<div class=\"card\">\n    <div class=\"row\">\n      <div class=\"col pr-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Uploaded Document\">\n          <img [src]=\"imgUrl\" alt=\"document\" class=\"w-100\" />\n        </p-card>\n      </div>\n      <div class=\"col pl-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Document Information\">\n          <div class=\"col-12 dynamic-page mt-0\" *ngIf=\"isformIO\">\n            <formio\n              #formIO\n              [form]=\"jsonForm\"\n              [readOnly]=\"isReadOnly\"\n              [submission]=\"submitionData\"\n              [refresh]=\"triggerRefresh\"\n          ></formio>\n          </div>\n          <button type=\"button\" class=\"btn success\" (click)=\"backToForm()\">Done</button>\n        </p-card>\n      </div>\n    </div>\n  </div>\n  \n", styles: [":host ::ng-deep .p-card .p-card-content{padding:0}:host ::ng-deep .p-card .success{border-color:#146a5d;color:#146a5d}\n"], dependencies: [{ kind: "component", type: i1.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PicsOcrValidationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pics-ocr-validation', template: "<div class=\"card\">\n    <div class=\"row\">\n      <div class=\"col pr-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Uploaded Document\">\n          <img [src]=\"imgUrl\" alt=\"document\" class=\"w-100\" />\n        </p-card>\n      </div>\n      <div class=\"col pl-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Document Information\">\n          <div class=\"col-12 dynamic-page mt-0\" *ngIf=\"isformIO\">\n            <formio\n              #formIO\n              [form]=\"jsonForm\"\n              [readOnly]=\"isReadOnly\"\n              [submission]=\"submitionData\"\n              [refresh]=\"triggerRefresh\"\n          ></formio>\n          </div>\n          <button type=\"button\" class=\"btn success\" (click)=\"backToForm()\">Done</button>\n        </p-card>\n      </div>\n    </div>\n  </div>\n  \n", styles: [":host ::ng-deep .p-card .p-card-content{padding:0}:host ::ng-deep .p-card .success{border-color:#146a5d;color:#146a5d}\n"] }]
        }], propDecorators: { isReadOnly: [{
                type: ViewChild,
                args: ['formIO']
            }], submitionData: [{
                type: Input
            }] } });

class PicscoreLibraryComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PicscoreLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: PicscoreLibraryComponent, selector: "lib-picscore-library", ngImport: i0, template: `
<lib-pics-ocr-validation></lib-pics-ocr-validation>
  `, isInline: true, dependencies: [{ kind: "component", type: PicsOcrValidationComponent, selector: "lib-pics-ocr-validation", inputs: ["submitionData"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PicscoreLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-picscore-library', template: `
<lib-pics-ocr-validation></lib-pics-ocr-validation>
  ` }]
        }] });

class PicscoreLibraryModule {
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

/*
 * Public API Surface of picscore-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PicscoreLibraryComponent, PicscoreLibraryModule, PicscoreLibraryService };
//# sourceMappingURL=picscore-library.mjs.map
