import { Component } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {
displayMobileNav = false;
iconMenu: string = "/assets/img/icons/mobile-menu.png";
iconClose: string = "/assets/img/icons/mobilemenu-close-final.png" 
iconHeader: any = this.iconMenu;


  toggleMobileNav() {
console.log("toggle");


  this.displayMobileNav = !this.displayMobileNav;
  if (this.iconHeader == this.iconMenu) {
    this.iconHeader = this.iconClose;
  } else this.iconHeader = this.iconMenu;
  



  };


}
