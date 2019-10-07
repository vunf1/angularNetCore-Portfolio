// ! EXPERIENCE BOX
import { Component, OnInit, ViewChild } from '@angular/core';
import { JobDescription } from '../interface/JobDescription';

@Component({
  selector: 'apr-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  panelOpenState = false;
  constructor() { }
  jobsElement: JobDescription[] = [
    /** 0 - Autonomous Self */
    {
      jobTitle: ['Autonomous Self - Studying Computer Concepts - lifetime passion'],
      date: ['June 2010 - Present'],
      jobLocal: ['Independent', 1, 1 ],
      // tslint:disable-next-line: max-line-length
      description: ['While I am on the computer I put more knowledge about hardware/software/web/network development depends on the need of what I want to do, every day I learn something new, I do what I like and it makes me happy. I have knowledge (medium) of various areas for when I need such skills am prepared.', 3, 2],
      color: 'white',
      id: '0',
    },
    /** 1 */
    {
      jobTitle: ['Re-Borns Transformer'],
      date: ['23-08-1996'],
      jobLocal: ['Heaven', 1, 1],
      description: ['Somewhere in the hills was found a prime and broke it in half after lost seing of', 3, 2],
      color: 'red',
      id: '1',
    },
  ];


  ngOnInit() {
    console.log('Experience - ON');
  }

}
