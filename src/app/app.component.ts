import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
showImprint: boolean = false;
  


constructor (private scrollService: ScrollService) {
}

scrollToBottom(): void {
  this.scrollService.scrollToBottom();
}
}
