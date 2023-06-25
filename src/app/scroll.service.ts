import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollToContactForm = new Subject<void>();
  scrollToContactForm$ = this.scrollToContactForm.asObservable();

  private scrollToPortfolioSection = new Subject<void>();
  scrollToPortfolioSection$ = this.scrollToPortfolioSection.asObservable();

  private scrollToAboutSection = new Subject<void>();
  scrollToAboutSection$ = this.scrollToAboutSection.asObservable();

  private scrollToSkillsSection = new Subject<void>();
  scrollToSkillsSection$ = this.scrollToSkillsSection.asObservable();

  scrollToContact() {
    this.scrollToContactForm.next();
  }

  scrollToPortfolio() {
    this.scrollToPortfolioSection.next();
  }

  scrollToAbout() {
    this.scrollToAboutSection.next();
  }

  scrollToSkills() {
    this.scrollToSkillsSection.next();
  }
}