import { Component } from '@angular/core';
import { ImprintService } from '../imprint.service';
import { ScrollService } from '../scroll.service';


@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
  animations: [
    //animation triggers go here
]
})
export class HeaderMobileComponent {
  displayMobileNav = false;
  iconMenu: string = '/assets/img/icons/mobile-menu.png';
  iconClose: string = '/assets/img/icons/mobilemenu-close-final.png';
  iconHeader: any = this.iconMenu;

  constructor(private scrollService: ScrollService, private imprintService: ImprintService) {}

  toggleMobileNav() {
    this.displayMobileNav = !this.displayMobileNav;
    if (this.iconHeader == this.iconMenu) {
      this.iconHeader = this.iconClose;
    } else this.iconHeader = this.iconMenu;
  }

  scrollToContact(): void {
    this.scrollService.scrollToContact();
    this.toggleMobileNav();
    this.closeImprint();
  }

  scrollToPortfolio(): void {
    this.scrollService.scrollToPortfolio();
    this.toggleMobileNav();
    this.closeImprint();
  }

  scrollToSkills(): void {
    this.scrollService.scrollToSkills();
    this.toggleMobileNav();
    this.closeImprint();
  }

  scrollToAbout(): void {
    this.scrollService.scrollToAbout();
    this.toggleMobileNav();
    this.closeImprint();
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
    this.closeImprint();
  }

  openImprint() {
    this.toggleMobileNav();
    this.imprintService.openImprint();    
  }

  closeImprint() {
    this.imprintService.closeImprint();
  }
}
