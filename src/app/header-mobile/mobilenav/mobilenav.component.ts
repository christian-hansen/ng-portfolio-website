import { Component } from '@angular/core';
import { ImprintService } from 'src/app/imprint.service';
import { ScrollService } from 'src/app/scroll.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-mobilenav',
  templateUrl: './mobilenav.component.html',
  styleUrls: ['./mobilenav.component.scss'],
  animations: [
    trigger('openClose', [
    state('closed', style({
      opacity: 0
    })), 
    state('open', style({
      opacity: 1
    }))])
  ]
})
export class MobilenavComponent {
isOpen = false;

  constructor(private scrollService: ScrollService, private imprintService: ImprintService) {}


toggle() {
  this.isOpen = !this.isOpen;
}

  scrollToContact(): void {
    this.scrollService.scrollToContact();
    // this.toggleMobileNav();
    this.closeImprint();
  }

  scrollToPortfolio(): void {
    this.scrollService.scrollToPortfolio();
    // this.toggleMobileNav();
    this.closeImprint();
  }

  scrollToSkills(): void {
    this.scrollService.scrollToSkills();
    // this.toggleMobileNav();
    this.closeImprint();
  }

  scrollToAbout(): void {
    this.scrollService.scrollToAbout();
    // this.toggleMobileNav();
    this.closeImprint();
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
    this.closeImprint();
  }

  openImprint() {
    // this.toggleMobileNav();
    this.imprintService.openImprint();    
  }

  closeImprint() {
    this.imprintService.closeImprint();
  }
}
