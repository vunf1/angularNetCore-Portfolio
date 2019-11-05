import { Component, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Subject } from "rxjs";
import { ComparableTemplate } from "features/settings/comparable-templates/models";

@Component({
  selector: "apr-custom-template-dialog",
  templateUrl: "./custom-template-dialog.component.html",
})
export class CustomTemplateDialogComponent {
  public save = new Subject<ComparableTemplate>();
  public cancel = new Subject();

  public templateForm: FormGroup;
  public loading = false;

  constructor(private formBuilder: FormBuilder) {
   this.templateForm = this.formBuilder.group({
      title: ["", Validators.required],
      body: ["", Validators.required],
    });
  }

  public onSave() {
    const value = this.templateForm.getRawValue();

    this.save.next({
      title: value.title,
      body: value.body,
    } as ComparableTemplate);

    this.save.complete();
  }

  public onCancel() {
    this.cancel.next();
  }
}
