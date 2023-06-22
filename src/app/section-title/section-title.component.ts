import { Component, Output, EventEmitter } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {

  constructor(private scrollService: ScrollService) { }

  scrollToContact(): void {
    this.scrollService.scrollToContact();
  }
}

