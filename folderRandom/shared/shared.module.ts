import { NgModule } from "@angular/core";
// import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
// import { VerticalTimelineModule } from "angular-vertical-timeline";

import { ContactCardComponent } from "./components/contact-card/contact-card.component";
import { FileDropComponent } from "./components/file-drop/file-drop.component";
import { FileDropDirective } from "./components/file-drop/file-drop.directive";
import { FileStateFactory } from "./components/file-drop/file-state-factory.service";
import { ImageComponent } from "./components/image/image.component";
import { NoResultComponent } from "./components/no-result/no-result.component";
import { MaterialModule } from "./modules/material.module";
// import { FileValidationService } from "./services/file-validation.service";
import { UtcToTimeZonePipe } from "./pipes/utc-to-time-zone.pipe";
import { FileSizePipe } from "./pipes/file-size.pipe";
import { ConfirmationDialogComponent, AlertDialogComponent } from "./components";
import { CustomCurrencyPipe } from "./pipes/custom-currency.pipe";
import { CustomTemplateDialogComponent } from "./components/custom-template-dialog/custom-template-dialog.component";
// import { CustomTemplateService } from "./services/custom-template.service";
import { UnsavedChangesBaseComponent } from "./components/unsaved-changes-base/unsaved-changes-base.component";
// import { DebugPipe } from "shared/pipes/debug.pipe";
@NgModule({
  imports: [
    MaterialModule,
    // VerticalTimelineModule,
  ],
  declarations: [
    FileDropComponent,
    FileDropDirective,
    UtcToTimeZonePipe,
    FileSizePipe,
    ContactCardComponent,
    NoResultComponent,
    ImageComponent,
    ConfirmationDialogComponent,
    AlertDialogComponent,
    CustomCurrencyPipe,
    // DebugPipe,
    CustomTemplateDialogComponent,
    UnsavedChangesBaseComponent,
  ],
  exports: [
    MaterialModule,
    FileDropComponent,
    FileDropDirective,
    ContactCardComponent,
    NoResultComponent,
    // NgxMatSelectSearchModule,
    UtcToTimeZonePipe,
    FileSizePipe,
    // DebugPipe,
    ImageComponent,
    ConfirmationDialogComponent,
    AlertDialogComponent,
    // VerticalTimelineModule,
    CustomCurrencyPipe,
    CustomTemplateDialogComponent,
  ],
  entryComponents: [ConfirmationDialogComponent, CustomTemplateDialogComponent, AlertDialogComponent],
  providers: [
    // FileValidationService,
    FileStateFactory,
    CustomCurrencyPipe,
    UtcToTimeZonePipe,
    CustomCurrencyPipe,
    // DebugPipe,
    // CustomTemplateService,
  ],
})
export class SharedModule { }
