import { Component, OnInit } from '@angular/core';

import { Data } from '@angular/router';
import { ScrollService } from '../scroll.service';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.scss']
})
export class SectionSkillsComponent implements OnInit {
  skills: any = [];

  constructor(private skillService: SkillsService, private scrollService: ScrollService) {

  }


  scrollToContact(): void {
    this.scrollService.scrollToContact();
  }

  ngOnInit(): void {
    this.getSkills();
  }
  
getSkills(): void {
this.skills = this.skillService.getSkills();
}

}
