import { Component, OnInit } from "@angular/core";
import {data} from "./constantData";

@Component({
  selector: "apr-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"],
})
export class EducationComponent implements OnInit {

  public data = data; // data from constant Edu-file
  constructor() {}

  public ngOnInit() {

  }

}
