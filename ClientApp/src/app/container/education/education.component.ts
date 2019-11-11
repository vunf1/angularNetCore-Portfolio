import { Component, OnInit } from "@angular/core";
import {data} from "./constantData";

import { SystemColors} from "../../interface/colors.enum";
import { ConsolaBrowser } from "src/app/interface/sharedMethods";
@Component({
  selector: "apr-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"],
})
export class EducationComponent implements OnInit {
public console = new ConsolaBrowser();
  public data = data; // data from constant Edu-file
  // public data = data; // data from constant Edu-file
  public triColor = SystemColors;
  constructor() {}

  public ngOnInit() {

  }

}
