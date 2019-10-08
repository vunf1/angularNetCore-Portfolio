import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

@Component({
  selector: "apr-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css" ],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];

  public keyValue: {[key: string]: any} = {
    /**
     * ! SideBar Information
     */
      me: ["Joao Maia", "me"],
      about: ["About Me", "about"],
      experience: ["Experience", "experience"],
      education: ["Education", "education"],
      skills: ["Skills", "skills"],
      interests: ["Interests", "interests"],
      certifications: ["Certifications", "certifications"],
      projects: ["Projects", "projects"],
    };

  constructor() { }
  public ngOnInit() {
    console.log(this.keyValue[0]);
  }
  public isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  }
}
