import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {
  bgLeft: string = "/assets/img/bg/intro-purple-shadow.png";
  bgRight: string = "/assets/img/bg/intro-green-shadow.png";

  constructor(private scrollService: ScrollService) { }


  scrollToContact(): void {
    this.scrollService.scrollToContact();
  }


}


