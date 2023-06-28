import { Component, OnInit } from '@angular/core';
import { ImprintService } from './imprint.service';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
showImprint: boolean;
  


constructor (private scrollService: ScrollService, private imprintService: ImprintService) {}

ngOnInit() {
  this.imprintService.showImprint.subscribe((value) => {
    this.showImprint = value;
  });
}

scrollToBottom(): void {
  this.scrollService.scrollToBottom();
}
}
