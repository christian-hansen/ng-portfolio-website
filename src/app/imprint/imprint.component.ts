import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {
@Output() closeImprint: EventEmitter<any> = new EventEmitter;

  closeImprintWindow() {
    this.closeImprint.emit(null);
  }
}
