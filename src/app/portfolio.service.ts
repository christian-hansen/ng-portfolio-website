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
    description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    tags: ['Javascript', 'Canvas', 'HTML', 'CSS'],
    id: 'displayPortfolioItem1'
  },
  {
    mainImage: "/assets/img/portfolio/Join01.png",
    backgroundImage: "/assets/img/portfolio/Join00.png",
    gitLink: 'https://www.github.com',
    liveLink: 'https://www.hansen-net.de',
    title: 'JOIN',
    description: 'Lorem ipsum...',
    tags: ['Angular', 'Javascript', 'HTML', 'CSS', 'Firebase']
  },
  {
    mainImage: "/assets/img/portfolio/pokedex.png",
    backgroundImage: "/assets/img/portfolio/pokedex.png",
    gitLink: 'https://www.github.com',
    liveLink: 'https://www.hansen-net.de',
    title: 'El Pollo Loco',
    description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    tags: ['Javascript', 'HTML', 'CSS'],
    id: 'displayPortfolioItem1'
  },
  {
    mainImage: "/assets/img/portfolio/crm.png",
    backgroundImage: "/assets/img/portfolio/crm.png",
    gitLink: 'https://www.github.com',
    liveLink: 'https://www.hansen-net.de',
    title: 'JOIN',
    description: 'Lorem ipsum...',
    tags: ['Angular', 'Javascript', 'HTML', 'CSS']
  }
]
  constructor() { }

  getPortfolio() {
    return this.portfolioitems;
  }
}
