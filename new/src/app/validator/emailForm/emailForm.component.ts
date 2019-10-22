import { Component, OnInit } from "@angular/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
@Component({
  selector: "apr-emailForm",
  templateUrl: "./emailForm.component.html",
  styleUrls: ["./emailForm.component.css"],
})
export class EmailFormComponent implements OnInit {
  public emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  public matcher = new MyErrorStateMatcher();

  constructor() { }

  public ngOnInit() {
  }

}
/** Error when invalid control is dirty, touched, or submitted. */
// tslint:disable-next-line: max-classes-per-file
export class MyErrorStateMatcher implements ErrorStateMatcher {
  public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
