import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PicsOcrValidationComponent implements OnInit {
    imgUrl: any;
    jsonForm: any;
    isformIO: boolean;
    isReadOnly: boolean;
    formJson: Array<any>;
    triggerRefresh: any;
    submitionData: any;
    ngOnInit(): void;
    backToForm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PicsOcrValidationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PicsOcrValidationComponent, "lib-pics-ocr-validation", never, { "submitionData": { "alias": "submitionData"; "required": false; }; }, {}, never, never, false, never>;
}
