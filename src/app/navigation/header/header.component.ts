import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'apr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false; // navBar variable check [open,close]
  constructor() {  }

  keyValue: {[key: string]: any} = {
    /**
     * ! SideBar Information
     */
    me: ['Joao Maia', 'me'],
    about: ['About Me', 'about'],
    experience: ['Experience', 'experience'],
    education: ['Education', 'education'],
    skills: ['Skills', 'skills'],
    interests: ['Interests', 'interests'],
    certifications: ['Certifications', 'certifications'],
    projects: ['Projects', 'projects'],
  };


  ngOnInit() {
    console.log('header - ON');
  }

}

