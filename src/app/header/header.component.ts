import { Component } from '@angular/core';
import { ImprintService } from '../imprint.service';

import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor (private scrollService: ScrollService, private imprintService: ImprintService) {
  }

  scrollToContact(): void {
    this.scrollService.scrollToContact();
    this.closeImprint();
  }

  scrollToPortfolio(): void {
    this.scrollService.scrollToPortfolio();
    this.closeImprint();
  }

  scrollToAbout(): void {
    this.scrollService.scrollToAbout();
    this.closeImprint();
  }

  scrollToSkills(): void {
    this.scrollService.scrollToSkills();
    this.closeImprint();
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
    this.closeImprint();
  }

  closeImprint() {
    this.imprintService.closeImprint();
  }
}
