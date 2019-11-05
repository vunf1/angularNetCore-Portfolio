import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "apr-unsaved-changes-base",
  template: ``,
})
export class UnsavedChangesBaseComponent {
  public isDirty$ = this._isDirty$.asObservable();
  private _isDirty$ = new BehaviorSubject(false);

  constructor() { }

  public markAsDirty(): void {
    this._isDirty$.next(true);
  }

  public markAsClean(): void {
    this._isDirty$.next(false);
  }
}
