import { Component, Inject, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AlertDialogData } from "./alert-dialog-data.interface";

@Component({
  selector: "apr-alert-dialog",
  templateUrl: "./alert-dialog.component.html",
})
export class AlertDialogComponent {

  public title = this.data.title;
  public content = this.data.content;
  public confirmButtonText = this.data.confirmButtonText || "OK";

  public loading = false;

  public onClose = new EventEmitter();
  public onConfirm = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AlertDialogData) { }

  public confirm() {
    this.onConfirm.emit();

    if (this.onConfirm.observers.length < 1) {
      this.dialogRef.close("confirmed");
    }
  }
}
