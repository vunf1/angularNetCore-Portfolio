// ! EXPERIENCE BOX
import { Component, OnInit } from "@angular/core";
import { JobDescription} from "../../interface/JobDescription";
import { ConsolaBrowser, escondeElement } from "../../interface/sharedMethods";

@Component({
  selector: "apr-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"],
})
export class ExperienceComponent implements OnInit {

  /*
  *
  * ! CONSOLAS
  */
  public console: ConsolaBrowser;

  public currentJustify = "justify"; // ngb-tabset centra os titulos no centro do container
  public escondeElement = escondeElement; // old  triggerDiv

  public componentTitle: string = "Experience";
  public jobsElement: JobDescription[] = [
    /** 0 - Autonomous Self */
    {
      jobTitle: ["Autonomous Self - Study Computer Concepts - lifetime passion"],
      date: ["June 2010 - Present"],
      jobLocal: ["Independent"],
      description: [
        "While I am on the computer I put more knowledge about hardware/software/web/network development depends on the need of what I want to do, every day I learn something new, I do what I like and it makes me happy. I have knowledge (medium) of various areas for when I need such skills am prepared."
      , "Acquired good bla bla bla bla bla bla bla bla bla bla"],
      color: "white",
      id: "job-0",
      jobSkills: ["cSharp", "Java"],
    },
    /** 1 */
    {
      jobTitle: ["Re-Borns Transformer"],
      date: ["23-08-1996"],
      jobLocal: ["Heaven"],
      description: ["Somewhere in the hills was found a prime and broke it in half after lost seing of"],
      color: "red",
      id: "job-1",
      jobSkills: ["cPluspluS", "JavaScript"],
    },
  ];
  constructor() {
    // this.enableColor.setRGB(255, 0 , 125);
   }
  public ngOnInit() {

    }
}
