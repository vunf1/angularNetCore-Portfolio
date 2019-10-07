// ! EXPERIENCE BOX
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
export interface JobDescription {
  jobTitle: Array<string | number> ; // text - col - row
  date: Array<string | number>;
  jobLocal: Array<string | number>;
  description: Array<string | number>;
  color: string;
  id: string;
}
@Component({
  selector: 'apr-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})
export class Box2Component implements OnInit {
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

  triggerDiv(id) {
    /**
     * ? Muda o estado do elemento para ficar visivel
     * o element (agarra o id do child) quando clicado (Melhoria possivel)
     */
    const element = document.getElementById(id);
    if (element.style.display === 'none') {

      element.style.display = 'block';
      // element.classList.add('alert alert-success');

    } else {
      element.style.display = 'none';
      // element.classList.remove('alert alert-success');
    }


  }



}
