import { Component, OnInit } from '@angular/core';

import { Data } from '@angular/router';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.scss']
})
export class SectionSkillsComponent implements OnInit {
  skills: any = [];

  constructor(private skillService: SkillsService) {

  }

  ngOnInit(): void {
    this.getSkills();
  }
  
getSkills(): void {
this.skills = this.skillService.getSkills();
}

}
