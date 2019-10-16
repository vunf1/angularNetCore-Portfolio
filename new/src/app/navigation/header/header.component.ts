import { Component, OnInit, HostListener } from "@angular/core";
import { NavTitles} from "../../interface/JobDescription";
import { ConsolaBrowser, escondeElement, CustomAlert} from "../../interface/sharedMethods";
import { navTitlesList } from "../constants_shared";
@Component({
  selector: "apr-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  public consoleS = new ConsolaBrowser();
  public alert = new CustomAlert("top left");
  public screenHeight: any;
  public screenWidth: any;
  public navTitlesList: string[] = navTitlesList;
  constructor() {

   }
  public ngOnInit() {
    console.log("header - ON");

  }

  public some() {
    this.alert.alertModalOK("OKEY");

  }

}
export const navTitles: NavTitles = {
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
