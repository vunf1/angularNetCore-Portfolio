import { Component, OnInit } from "@angular/core";
import { navTitlesList } from "../constants_shared";

@Component({
  selector: "apr-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {

  public navTitlesList: string[] = navTitlesList;
  constructor() {

  }

  public ngOnInit() {

  }
  }
