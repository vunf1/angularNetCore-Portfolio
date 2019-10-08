import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'apr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false; // navBar variable check [open,close]
  screenHeight: any;
  screenWidth: any;
  constructor() {
    this.getScreenSize();
   }

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
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
  }


  ngOnInit() {
    console.log('header - ON');
  }
  request(route: string) {

  }

}
