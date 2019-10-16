
import {Component, OnDestroy, HostListener, OnInit} from "@angular/core";
/**
 * !;
 *
 */
@Component({
  selector: "apr-root",
  styleUrls: ["./app.component.css", "./css/resume.min.css" ],
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit  {
  public title = "OverKill Project v.0.3.0";

  triggerNavigation: boolean;
  screenWidth: number;
  screenHeight: number;

  public ngOnInit() {
  }
  @HostListener("window:resize", ["$event"])
  public onResize(event?) {
     this.screenHeight = window.innerHeight;
     this.screenWidth = window.innerWidth;
     if (this.screenWidth < 790) {
      this.triggerNavigation = true;
     } else {
      this.triggerNavigation = false;
     }
  }
}
