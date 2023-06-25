import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioService } from '../portfolio.service';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-section-portfolio',
  templateUrl: './section-portfolio.component.html',
  styleUrls: ['./section-portfolio.component.scss'],
})
export class SectionPortfolioComponent implements OnInit, AfterViewInit, OnDestroy{
  portfolio: any = [];
  @ViewChild('portfolioSection', { static: true }) target: ElementRef;
  private subscription: Subscription;

  constructor(private portfolioItemService: PortfolioService, private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.getPortfolioItems();
  }

  ngAfterViewInit() {
    this.subscription = this.scrollService.scrollToPortfolioSection$.subscribe(
      () => {
        const elementPosition = this.target.nativeElement.offsetTop; // Get the top position of the element
        const adjustment = 150; // Set your adjustment value
        window.scrollTo({
          top: elementPosition - adjustment,
          behavior: 'smooth',
        }); // Scroll to the adjusted position
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getPortfolioItems() {
    this.portfolio = this.portfolioItemService.getPortfolio();
  }
}
