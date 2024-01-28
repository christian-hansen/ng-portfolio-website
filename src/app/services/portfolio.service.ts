import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
portfolioitems: any = [
  
  {
    mainImage: "/assets/img/portfolio/crm.png",
    backgroundImage: "/assets/img/portfolio/crm.png",
    gitLink: 'https://www.github.com/christian-hansen/',
    liveLink: 'https://da-bubble.codiy.de/',
    title: 'DA-Bubble',
    description: 'Experience "DA-Bubble", a real-time chat application seamlessly connected to a Firebase database, enhancing your communication experience.',
    tags: ['Angular', 'Typescript', 'HTML', 'CSS', 'Firebase']
  },
  {
    mainImage: "/assets/img/portfolio/Join01.png",
    backgroundImage: "/assets/img/portfolio/Join00.png",
    gitLink: 'https://github.com/christian-hansen/join-app',
    liveLink: 'https://christian-hansen.developerakademie.net/join/',
    title: 'JOIN',
    description: 'Explore "JOIN" a user-friendly Kanban board and Customer Relationship Management (CRM) app built with vanilla Javascript.',
    tags: ['Javascript', 'HTML', 'CSS']
  },
  {
    mainImage: "/assets/img/portfolio/Pollo-Loco01.png",
    backgroundImage: "/assets/img/portfolio/Pollo-Loco00.png",
    gitLink: 'https://github.com/christian-hansen/el-pollo-loco',
    liveLink: 'https://christian-hansen.developerakademie.net/elpolloloco/',
    title: 'El Pollo Loco',
    description: 'Embark on an adventure with "El Pollo Loco", a captivating jump and run game crafted using object-oriented JavaScript.',
    tags: ['Javascript', 'Canvas', 'HTML', 'CSS']
  },
  {
    mainImage: "/assets/img/portfolio/Website01.png",
    backgroundImage: "/assets/img/portfolio/Website00.jpeg",
    gitLink: 'https://github.com/christian-hansen/portfolio-website',
    liveLink: 'https://www.christian-hansen.dev',
    title: 'Personal website',
    description: 'Discover my personal portfolio website, crafted using the Angular framework for a sleek and modern design.',
    tags: ['Angular', 'Typescript', 'HTML', 'CSS']
  },
    {
    mainImage: "/assets/img/portfolio/weather-phone.png",
    backgroundImage: "/assets/img/portfolio/weather00.png",
    gitLink: 'https://github.com/christian-hansen/ng-weather',
    liveLink: 'https://weather.christian-hansen.dev/',
    title: 'Weather App',
    description: 'Stay informed with this Angular weather application that utilizes the Openweather API to provide real-time weather updates and forecasts for your chosen cities.',
    tags: ['Angular', 'Typescript', 'API', 'HTML', 'CSS']
  },
  // {
  //   mainImage: "/assets/img/portfolio/crm.png",
  //   backgroundImage: "/assets/img/portfolio/simple-crm.png",
  //   gitLink: 'https://github.com/christian-hansen/simple-crm',
  //   liveLink: 'https://github.com/christian-hansen/simple-crm',
  //   title: 'Simple CRM',
  //   description: 'The "Simple CRM" project is currently "work-in-progress" and will be available here soon.',
  //   tags: ['Angular', 'Typescript', 'Firebase', 'HTML', 'CSS', 'Material Design']
  // },
]
  constructor() { }

  getPortfolio() {
    return this.portfolioitems;
  }
}
