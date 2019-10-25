import { NgModule } from "@angular/core";
import {
  MatGridListModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatRadioModule,
  MatStepperModule,
  MatExpansionModule,
  MatIconModule,
  MatFormFieldModule,
  MatTreeModule,
  MatMenuModule,
  MatProgressBarModule,
  MatBadgeModule,
  MatButtonToggleModule,
} from "@angular/material";
import { ScrollingModule } from "@angular/cdk/scrolling";

@NgModule({
  exports: [
    MatGridListModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatRadioModule,
    MatStepperModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatTreeModule,
    MatMenuModule,
    MatProgressBarModule,
    ScrollingModule,
    MatBadgeModule,
    MatButtonToggleModule,
  ],
})
export class MaterialModule {}
