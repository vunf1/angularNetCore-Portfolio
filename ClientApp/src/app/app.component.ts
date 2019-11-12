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
import { SystemColors} from "../app/interface/colors.enum";
@Component({
  selector: "apr-root",
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html",
})
export class AppComponent  implements OnInit, OnDestroy {
  public title = "OverKill Project v.0.3.0";

  public triColor = SystemColors;

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

    if (this.screenWidth > 1178 && this.screenHeight > 555 ) {
        this.triggerNavigation = "header";

    } else {
        this.triggerNavigation = "topbar";

    }
  }
}
