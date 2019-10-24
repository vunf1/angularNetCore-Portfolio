import { Component, OnInit } from "@angular/core";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: Array<string|any> | string;
}
@Component({
  selector: "apr-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"],
})
export class EducationComponent implements OnInit {
  public tiles: Tile[] = [{
      text: "COVENTRY UNIVERSITY \n <br/> " + "COVENTRY, WEST MIDLANDS, UNITED KINGDOM",
      cols: 3,
      rows: 1,
      color: "lightblue"},
      {text: "September 2017 " + new Date("mm-yyyy"), cols: 2, rows: 1, color: "lightgreen"},
      {text: "BACHELOR OF COMPUTER SCIENCE", cols: 5, rows: 1, color: "#DDBDF1"},
      {text: "September 2017 " + new Date("mm-yyyy"), cols: 5, rows: 1, color: "lightgreen"},

  ];
  constructor() { }

  public ngOnInit() {
  }

}
