import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "apr-no-result",
  templateUrl: "./no-result.component.html",
})
export class NoResultComponent implements OnInit {
  @Input() public message: string;
  @Input() public icon!: string;
  @Input() public size!: string;

  constructor() {
    this.message = "There is nothing to show here";
  }

  public ngOnInit() {}
}
