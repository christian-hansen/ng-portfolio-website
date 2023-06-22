import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {

  @Output() buttonClick = new EventEmitter<void>();

  scrollToContactForm(): void {
    this.buttonClick.emit();
  }
}

