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
shutImprint: boolean;
  


constructor (private scrollService: ScrollService, private imprintService: ImprintService) {

}

ngOnInit(): void {
  this.imprintService.showImprint.subscribe((value) => {
    this.showImprint = value;
  });
  this.imprintService.shutImprint.subscribe((value) => {
    this.shutImprint = value;
  });
}

scrollToBottom(): void {
  this.scrollService.scrollToBottom();
}
}
