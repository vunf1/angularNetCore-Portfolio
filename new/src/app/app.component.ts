import {
  Component,
  OnDestroy,
  HostListener,
  OnInit,
  Renderer,
} from "@angular/core";
import { Router, RouterEvent, NavigationEnd } from "@angular/router";
import { filter } from "minimatch";
import { Subject } from "rxjs";
/**
 * !;
 *
 */
@Component({
  selector: "apr-root",
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html",
})
export class AppComponent  implements OnInit, OnDestroy {
  public title = "OverKill Project v.0.3.0";

  public triggerNavigation: string;
  public triggerFixesSide: boolean;
  public triggerFixesNav: boolean;
  public fixPaddingWhnNav: boolean;
  public screenWidth: number;
  public screenHeight: number;

  public destroyed = new Subject<any>();
  private element: Element;
  private renderer: Renderer;

  constructor(private router: Router) {

  }

  public ngOnInit(): void {

    this.onResize();
  }

  public ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
  @HostListener("window:resize", ["$event"])
  public onResize(event ? ) {

    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    if (this.screenWidth >= 854) {
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
