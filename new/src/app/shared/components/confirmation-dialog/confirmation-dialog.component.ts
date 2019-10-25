import { Component, Inject, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ConfirmationDialogData } from "./confirmation-dialog-data.interface";

@Component({
  selector: "apr-confirmation-dialog",
  templateUrl: "./confirmation-dialog.component.html",
})
export class ConfirmationDialogComponent {

  public title = this.data.title;
  public content = this.data.content;
  public closeButtonText = this.data.closeButtonText || "Close";
  public confirmButtonText = this.data.confirmButtonText || "Confirm";
  public closeButtonDisabled = this.data.closeButtonDisabled || false;
  public confirmButtonDisabled = this.data.confirmButtonDisabled || false;
  public hideCloseButton = this.data.hideCloseButton || false;

  public loading = false;

  public onClose = new EventEmitter();
  public onConfirm = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData) { }

  public close() {
    this.onClose.emit();

    if (this.onClose.observers.length < 1) {
      this.dialogRef.close();
    }
  }

  public confirm() {
    this.onConfirm.emit();

    if (this.onConfirm.observers.length < 1) {
      this.dialogRef.close("confirmed");
    }
  }
}
