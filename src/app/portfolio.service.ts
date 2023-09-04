import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
portfolioitems: any = [
  
  {
    mainImage: "/assets/img/portfolio/Join01.png",
    backgroundImage: "/assets/img/portfolio/Join00.png",
    gitLink: 'https://github.com/christian-hansen/join-app',
    liveLink: 'https://christian-hansen.developerakademie.net/join/',
    title: 'JOIN',
    description: '"JOIN" is a simple Customer Relationship Management (CRM) application written in vanilla Javascript.',
    tags: ['Javascript', 'HTML', 'CSS']
  },
  {
    mainImage: "/assets/img/portfolio/Website01.png",
    backgroundImage: "/assets/img/portfolio/Website00.jpeg",
    gitLink: 'https://github.com/christian-hansen/portfolio-website',
    liveLink: 'https://www.christian-hansen.eu',
    title: 'Personal website',
    description: 'My personal portfolio website that was created with the Angular framework.',
    tags: ['Angular', 'Typescript', 'HTML', 'CSS']
  },
  {
    mainImage: "/assets/img/portfolio/Pollo-Loco01.png",
    backgroundImage: "/assets/img/portfolio/Pollo-Loco00.png",
    gitLink: 'https://github.com/christian-hansen/el-pollo-loco',
    liveLink: 'https://christian-hansen.developerakademie.net/elpolloloco/',
    title: 'El Pollo Loco',
    description: '"El Pollo Loco" is a jump and run game developed with object-oriented JavaScript.',
    tags: ['Javascript', 'Canvas', 'HTML', 'CSS']
  },
  {
    mainImage: "/assets/img/portfolio/crm.png",
    backgroundImage: "/assets/img/portfolio/simple-crm.png",
    gitLink: 'https://github.com/christian-hansen/simple-crm',
    liveLink: 'https://github.com/christian-hansen/simple-crm',
    title: 'Simple CRM',
    description: 'The "Simple CRM" project is currently "work-in-progress" and will be available here soon.',
    tags: ['Angular', 'Typescript', 'Firebase', 'HTML', 'CSS', 'Material Design']
  },
  // {
  //   mainImage: "/assets/img/portfolio/crm.png",
  //   backgroundImage: "/assets/img/portfolio/crm.png",
  //   gitLink: 'https://www.github.com/christian-hansen/',
  //   liveLink: 'https://www.hansen-net.de/projekte',
  //   title: 'Simple CRM TBD',
  //   description: 'Lorem ipsum...',
  //   tags: ['Angular', 'Typescript', 'HTML', 'CSS']
  // }
]
  constructor() { }

  getPortfolio() {
    return this.portfolioitems;
  }
}
