import { Component, OnInit } from "@angular/core";

@Component({
  selector: "apr-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
    console.log("Skills Load");

  }

}
