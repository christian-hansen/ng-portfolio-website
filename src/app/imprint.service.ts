import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImprintService {
  private _showImprint: BehaviorSubject<boolean> = new BehaviorSubject(false);

  get showImprint() {
    return this._showImprint.asObservable();
  }

  openImprint() {
    this._showImprint.next(true);
  }

  closeImprint() {
    this._showImprint.next(false);
  }
}
