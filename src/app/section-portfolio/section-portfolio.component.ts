import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-section-portfolio',
  templateUrl: './section-portfolio.component.html',
  styleUrls: ['./section-portfolio.component.scss'],
})
export class SectionPortfolioComponent implements OnInit{
  portfolio: any = [];

  constructor(private portfolioItemService: PortfolioService) {}

  ngOnInit(): void {
    this.getPortfolioItems();
  }

  

  getPortfolioItems() {
    this.portfolio = this.portfolioItemService.getPortfolio();
  }
}
