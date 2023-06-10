import { Component } from '@angular/core';

@Component({
  selector: 'app-section-portfolio',
  templateUrl: './section-portfolio.component.html',
  styleUrls: ['./section-portfolio.component.scss']
})
export class SectionPortfolioComponent {
  displayPortfolioItem1 = true;

  togglePortfolioItem() {
    this.displayPortfolioItem1 = !this.displayPortfolioItem1;
  }
}
