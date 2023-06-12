import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-section-portfolio',
  templateUrl: './section-portfolio.component.html',
  styleUrls: ['./section-portfolio.component.scss'],
})
export class SectionPortfolioComponent implements OnInit {
  portfolio: any = [];

  constructor(private portfolioItemService: PortfolioService) {}

  ngOnInit(): void {
    this.getPortfolioItems();
  }

  openPortfolioItem(input: number) {
    const item = document.getElementById('portfolioitem' + input);
    const itemdetail = document.getElementById('portfolioitemdetail' + input);

    if (item != null && itemdetail != null) {
      item.classList.add('d-none');
      itemdetail.classList.remove('d-none');
    }
  }

  closePortfolioItem(input: number) {
    const item = document.getElementById('portfolioitem' + input);
    const itemdetail = document.getElementById('portfolioitemdetail' + input);

    if (item != null && itemdetail != null) {
      item.classList.remove('d-none');
      itemdetail.classList.add('d-none');
    }
  }

  getPortfolioItems() {
    this.portfolio = this.portfolioItemService.getPortfolio();
  }
}
