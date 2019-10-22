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
    console.log(this.element.querySelector(".contentBox") );
    if (this.element.querySelector(".contentBox") !== null) {
      const boxContent = this.element.querySelector(".contentBox");

      if (this.screenWidth >= 790) {
        if (boxContent !== null) { // Permite o content ficar no top enquanto muda pra Sidebar
          this.renderer.setElementStyle(boxContent, "padding-top", "0%");
        }
        this.triggerNavigation = "header";
      } else {

        if (boxContent !== null) { // Permite o content ficar distante da navbar enquanto muda
          this.renderer.setElementStyle(boxContent, "padding-top", "20%");
        }
        this.triggerNavigation = "topbar";
      }

    }
  }
}
