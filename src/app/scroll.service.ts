import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollToContactFormSource = new Subject<void>();
  scrollToContactForm$ = this.scrollToContactFormSource.asObservable();

  scrollToContact() {
    this.scrollToContactFormSource.next();
  }
}