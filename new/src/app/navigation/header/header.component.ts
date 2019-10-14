import { Component, OnInit, HostListener } from "@angular/core";
import { NavTitles } from "../../interface/JobDescription";
@Component({
  selector: "apr-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  public navbarOpen = false; // navBar variable check [open,close]
  public screenHeight: any;
  public screenWidth: any;

  constructor() {
   }
  public ngOnInit() {
    console.log("header - ON");
  }
  @HostListener("window:resize", ["$event"])
  private getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

}
export const keyValue: NavTitles = {
  /**
   * ! SideBar Information
   */
    me: ["Joao Maia", "me "],
    about: ["About Me", "about"],
    experience: ["Experience", "experience"],
    education: ["Education", "education"],
    skills: ["Skills", "skills"],
    interests: ["Interests", "interests"],
    certifications: ["Certifications", "certifications"],
    projects: ["Projects", "projects"],
  };
