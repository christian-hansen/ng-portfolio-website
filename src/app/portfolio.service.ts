import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
portfolioitems: any = [
  {
    mainImage: "/assets/img/portfolio/Pollo-Loco01.png",
    backgroundImage: "/assets/img/portfolio/Pollo-Loco00.png",
    gitLink: 'https://www.github.com',
    liveLink: 'https://www.hansen-net.de',
    title: 'El Pollo Loco',
    description: '"El Pollo Loco" is a jump and run game developed with object-oriented JavaScript.',
    tags: ['Javascript', 'Canvas', 'HTML', 'CSS'],
    id: 'displayPortfolioItem1'
  },
  {
    mainImage: "/assets/img/portfolio/Join01.png",
    backgroundImage: "/assets/img/portfolio/Join00.png",
    gitLink: 'https://www.github.com',
    liveLink: 'https://www.hansen-net.de',
    title: 'JOIN',
    description: '"JOIN" is a simple Customer Relationship Management (CRM) application written in vanilla Javascript.',
    tags: ['Javascript', 'HTML', 'CSS']
  },
  {
    mainImage: "/assets/img/portfolio/pokedex.png",
    backgroundImage: "/assets/img/portfolio/pokedex.png",
    gitLink: 'https://www.github.com',
    liveLink: 'https://www.hansen-net.de',
    title: 'Pokedex',
    description: 'Lorem ipsum...',
    tags: ['Javascript', 'HTML', 'CSS'],
    id: 'displayPortfolioItem1'
  },
  {
    mainImage: "/assets/img/portfolio/crm.png",
    backgroundImage: "/assets/img/portfolio/crm.png",
    gitLink: 'https://www.github.com',
    liveLink: 'https://www.hansen-net.de',
    title: 'Simple CRM',
    description: 'Lorem ipsum...',
    tags: ['Angular', 'Javascript', 'HTML', 'CSS']
  }
]
  constructor() { }

  getPortfolio() {
    return this.portfolioitems;
  }
}
