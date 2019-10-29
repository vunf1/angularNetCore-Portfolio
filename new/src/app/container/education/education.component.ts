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
  public data: Array <string | Array<string | any> > = [
    [
      {title: "COVENTRY UNIVERSITY \n <br/> " + "COVENTRY, WEST MIDLANDS, UNITED KINGDOM", cols: 3, rows: 1, color: "white"},
      {sdate: "September 2017 " + new Date("mm-yyyy"), cols: 2, rows: 1, color: "white"},
      {subtitle: "BACHELOR OF COMPUTER SCIENCE", cols: 5, rows: 1, color: "white"},
      {edate: "September 2017 " + new Date("mm-yyyy"), cols: 5, rows: 1, color: "white"},
    ],
    [
      {title: "COVENTRY UNIVERSITY \n <br/> " + "COVENTRY, WEST MIDLANDS, UNITED KINGDOM", cols: 3, rows: 1, color: "white"},
      {sdate: "September 2017 " + new Date("mm-yyyy"), cols: 2, rows: 1, color: "white"},
      {subtitle: "BACHELOR OF COMPUTER SCIENCE", cols: 5, rows: 1, color: "white"},
      {edate: "September 2017 " + new Date("mm-yyyy"), cols: 5, rows: 1, color: "white"},
    ],
  ];
  constructor() { }

  public ngOnInit() {
  }

}
