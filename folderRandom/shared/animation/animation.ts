import { transition, style, trigger, animate, keyframes } from "@angular/animations";

export let highlightSubject = trigger("highlightSubject", [
  transition("* => adjusted", animate("1000ms", keyframes([
    style({ backgroundColor: "#48c9c8" }),
    style({ backgroundColor: "#21a7a6" }),
    style({ backgroundColor: "#48c9c8" }),
    style({ backgroundColor: "#21a7a6" }),
    style({ backgroundColor: "#48c9c8" }),
  ]))),
]);

export let highlightComparable = trigger("highlightComparable", [
  transition("* => adjusted", animate("1000ms", keyframes([
    style({ backgroundColor: "initial", color: "#ffffff" }),
    style({ backgroundColor: "#48c9c8", color: "#ffffff" }),
    style({ backgroundColor: "initial", color: "#ffffff" }),
    style({ backgroundColor: "#48c9c8", color: "#ffffff" }),
    style({ backgroundColor: "initial", color: "#ffffff" }),
  ]))),
]);
