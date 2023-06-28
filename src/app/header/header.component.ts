import { Component } from '@angular/core';

import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor (private scrollService: ScrollService) {
  }

  scrollToContact(): void {
    this.scrollService.scrollToContact();
  }

  scrollToPortfolio(): void {
    this.scrollService.scrollToPortfolio();
  }

  scrollToAbout(): void {
    this.scrollService.scrollToAbout();
  }

  scrollToSkills(): void {
    this.scrollService.scrollToSkills();
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }


}
