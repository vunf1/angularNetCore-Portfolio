import { Component, OnInit } from "@angular/core";

@Component({
  selector: "apr-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  public test: Date = new Date();
  constructor() { }

  public ngOnInit() {
  }

}
