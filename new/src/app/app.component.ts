import {
  Component,
  OnDestroy,
  HostListener,
  OnInit,
  Renderer,
} from "@angular/core";
/**
 * !;
 *
 */
@Component({
  selector: "apr-root",
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  public title = "OverKill Project v.0.3.0";

  public triggerNavigation: string;
  public triggerFixesSide: boolean;
  public triggerFixesNav: boolean;
  public fixPaddingWhnNav: boolean;
  public screenWidth: number;
  public screenHeight: number;

  private element: Element;
  private renderer: Renderer;
  constructor() {

  }

  public ngOnInit() {
    this.onResize();
  }
  @HostListener("window:resize", ["$event"])
  public onResize(event ? ) {

    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    if (this.screenWidth >= 790) {
        this.triggerFixesNav = false;

        this.triggerFixesSide = true;
        this.fixPaddingWhnNav = false;
        this.triggerNavigation = "header";

    } else {

        this.triggerFixesSide = false;
        this.fixPaddingWhnNav = true;

        this.triggerFixesNav = true;
        this.triggerNavigation = "topbar";

    }
  }
}
