import { AfterViewInit, ViewChild, ElementRef, Component, OnDestroy } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements AfterViewInit, OnDestroy {
  @ViewChild('contact', { static: true }) target: ElementRef;
  private subscription: Subscription;

  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    this.subscription = this.scrollService.scrollToContactForm$.subscribe(() => {
      const elementPosition = this.target.nativeElement.offsetTop; // Get the top position of the element
      const adjustment = 150; // Set your adjustment value
      window.scrollTo({ top: elementPosition - adjustment, behavior: 'smooth' }); // Scroll to the adjusted position
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
