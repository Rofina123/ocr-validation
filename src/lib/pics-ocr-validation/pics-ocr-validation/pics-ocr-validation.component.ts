import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormioComponent } from 'angular-formio';




@Component({
  selector: 'lib-pics-ocr-validation',
  templateUrl: './pics-ocr-validation.component.html',
  styleUrls: ['./pics-ocr-validation.component.scss']
})
export class PicsOcrValidationComponent implements OnInit {
  imgUrl: any;
  jsonForm: any;
  isformIO = false;
  @ViewChild('formIO')
  formIO!: FormioComponent;
isReadOnly = false;
formJson: Array<any> = [];
triggerRefresh: any;
@Input() submitionData: any;



ngOnInit(): void {

}


  backToForm() {
   
  }
}
