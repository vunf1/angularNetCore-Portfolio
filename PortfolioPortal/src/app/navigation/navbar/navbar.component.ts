import { Component, OnInit } from "@angular/core";
import { navTitlesList } from "../constants_shared";
import { ConsolaBrowser, escondeElement, CustomAlert} from "../../interface/sharedMethods";
import { delay } from "q";

@Component({
  selector: "apr-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  public collapsed = true;
  public value: any = false;
  public navTitlesList: string[] = navTitlesList;
  public modal = new CustomAlert( "bottom right" );
  constructor() {

  }
  public ngOnInit() {
    console.log(this.value);
  }

  public tri() {
    this.value = this.modal.ConfirmDialog("Body Something", " ");
    console.log(this.value);

  }
  }
