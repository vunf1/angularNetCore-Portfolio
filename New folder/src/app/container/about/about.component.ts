import { Component, OnInit } from "@angular/core";
@Component({
  selector: "apr-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {

/**
 *
 *  About Data
 *
 */
  public aboutData: {[key: string]: any} = {
    name:
    ["João", "Maia"],
    addressTitle:
    ["UK Home Location - Current", "Portugal Home Location"],
    address:
    ["1 King Richard Street, Coventry, CV2 4FU", "Rua do Vale, no.285, 2ºDTO, Arcozelo, 4410-348"],
    contact:
    ["(44) 7393557259", "jokass.workplace@gmail.com"],
    softSkills:
    [ // ! 0 - Title
      "Soft Skills",
      // ! 1
      // tslint:disable-next-line: max-line-length
      "I am a Cooperative, Devoted, Enthusiastic, Friendly, Dynamic, Responsible, Imaginative, Educated and Hardworking as a person.",
      // ! 2
      "Ability and willingness to learn, positive attitude and initiative to work.",
      // ! 3
      "Quality orientation and attention to detail.",
      // ! 4
      "Problem solving skills.",
      // ! 5
      "I often seek the opinion/feedback of the end-user.",
      // ! 6
      "Fluent in English, written, spoken and understanding.",
  ],
  };

  constructor() { }
  public ngOnInit() {
    console.log("About - ON");
  }

}
