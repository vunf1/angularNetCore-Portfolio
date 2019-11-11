import { Component, OnInit, HostListener } from "@angular/core";
import { NavTitles} from "../../interface/JobDescription";
import { ConsolaBrowser, escondeElement, CustomAlert} from "../../interface/sharedMethods";
import { navTitlesList } from "../constants_shared";
import { SystemColors } from "src/app/interface/colors.enum";
@Component({
  selector: "apr-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent implements OnInit {
  public consoleS = new ConsolaBrowser();
  public alert = new CustomAlert("bottom right");
  public screenHeight: any;
  public screenWidth: any;
  public navTitlesList: string[] = navTitlesList;
  public triColor = SystemColors;
  constructor() {

   }
  public ngOnInit() {
    console.log("sidenav - ON");

  }

  public some(title) {
    this.alert.NotificationSuccess(title);

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
