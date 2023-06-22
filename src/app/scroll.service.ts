import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollToElement = new Subject<void>();
  scrollToContactForm$ = this.scrollToElement.asObservable();

  scrollToContact() {
    this.scrollToElement.next();
  }
}