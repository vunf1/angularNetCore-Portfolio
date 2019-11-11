import { Component, OnInit, HostListener } from "@angular/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {EmailValidator} from "email-deep-validator";
@Component({
  selector: "apr-emailForm",
  templateUrl: "./emailForm.component.html",
  styleUrls: ["./emailForm.component.css"],
})
export class EmailFormComponent implements OnInit {
  // wellFormed: true
  constructor() { }
  public tri() {
    const str: any = (document.getElementById("inputMail") as HTMLInputElement).value ;
    console.log(str);
  }

  public ngOnInit() {
  }

  @HostListener("document:keypress", ["$event"])
  public handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key);
  }
}
