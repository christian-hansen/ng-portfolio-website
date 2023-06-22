import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-website';

  @ViewChild('contact', { static: true }) contact: ElementRef;

  scrollToContact(): void {
    this.contact.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
