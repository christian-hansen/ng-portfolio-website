import { Component } from '@angular/core';
import { ImprintService } from '../imprint.service';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent {
  displayMobileNav = false;
  iconMenu: string = '/assets/img/icons/mobile-menu.png';
  iconClose: string = '/assets/img/icons/mobilemenu-close-final.png';
  iconHeader: any = this.iconMenu;

  constructor(private scrollService: ScrollService, private imprintService: ImprintService) {}

  toggleMobileNav() {
    console.log('toggle');

    this.displayMobileNav = !this.displayMobileNav;
    if (this.iconHeader == this.iconMenu) {
      this.iconHeader = this.iconClose;
    } else this.iconHeader = this.iconMenu;
  }

  scrollToContact(): void {
    this.scrollService.scrollToContact();
    this.toggleMobileNav();
  }

  scrollToPortfolio(): void {
    this.scrollService.scrollToPortfolio();
    this.toggleMobileNav();
  }

  scrollToSkills(): void {
    this.scrollService.scrollToSkills();
    this.toggleMobileNav();
  }

  scrollToAbout(): void {
    this.scrollService.scrollToAbout();
    this.toggleMobileNav();
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }

  openImprint() {
    this.toggleMobileNav();
    this.imprintService.openImprint();    
  }
}
