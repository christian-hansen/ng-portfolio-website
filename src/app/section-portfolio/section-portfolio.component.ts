import { Component } from '@angular/core';

@Component({
  selector: 'app-section-portfolio',
  templateUrl: './section-portfolio.component.html',
  styleUrls: ['./section-portfolio.component.scss']
})
export class SectionPortfolioComponent {
  displayPortfolioItem1 = true;
  displayPortfolioItem2 = true;
  displayPortfolioItem3 = true;
  displayPortfolioItem4 = true;
  displayPortfolioItem5 = true;

  togglePortfolioItem(input: number) {
    console.log(input);
    
  if (input === 1) {this.displayPortfolioItem1 = !this.displayPortfolioItem1;}
  else if (input === 2) {this.displayPortfolioItem2 = !this.displayPortfolioItem2;}
  else if (input === 3) {this.displayPortfolioItem3 = !this.displayPortfolioItem3;}
  else if (input === 4) {this.displayPortfolioItem4 = !this.displayPortfolioItem4;}
  else if (input === 5) {this.displayPortfolioItem5 = !this.displayPortfolioItem5;}
  }
}
