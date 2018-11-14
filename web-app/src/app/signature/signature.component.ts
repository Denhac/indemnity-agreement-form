import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';



@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
  // host: {
  //   '(window:resize)': 'onResize($event)'
  // }
})

export class SignatureComponent {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @Output() signatureCompleted: EventEmitter<any> = new EventEmitter();



  private signaturePadOptions: Object = {
    'minWidth': 5,
    'canvasWidth': 400,
    'canvasHeight': 150
  };
  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
    this.signatureCompleted.emit(null);
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

}

