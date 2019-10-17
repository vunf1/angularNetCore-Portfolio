/**
 * NG BOOTSTRAP
 */
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
/**
 * Angular Cores
 */
import {
  BrowserModule,
} from "@angular/platform-browser";

import {
  NgModule,
} from "@angular/core";

import {
  CommonModule,
} from "@angular/common";

import {
  RouterModule,
  Routes,
} from "@angular/router"; // Routing
import {
  BrowserAnimationsModule,
} from "@angular/platform-browser/animations"; /* Animacoes no browser  */

/**
 * MATERIALS
 */
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from "@angular/material";
// import {
//   MatSidenavModule,
// } from "@angular/material/sidenav";
// import {
//   MatIconModule,
// } from "@angular/material/icon";
// import {
//   MatToolbarModule,
// } from "@angular/material/toolbar";
// import {
//   MatListModule,
// } from "@angular/material/list";
import {
  LayoutModule,
} from "@angular/cdk/layout";
// import {
//   MatGridListModule,
// } from "@angular/material/grid-list";
// import {
//   MatExpansionModule,
// } from "@angular/material/expansion";
// import {
//   MatButtonModule,
// } from "@angular/material";

/** ! Independent */
import {
  AppComponent,
} from "./app.component";
import {
  SidenavComponent,
} from "./navigation/sidenav/sidenav.component";
import {
  AboutComponent,
} from "./container/about/about.component";
import {
  ExperienceComponent,
} from "./container/experience/experience.component";

import {
  NavbarComponent,
} from "./navigation/navbar/navbar.component";

const appRoutes: Routes = [{
    path: "about",
    component: AboutComponent,
  },
  {
    path: "experience",
    component: ExperienceComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    AboutComponent,
    ExperienceComponent,
  ],
  imports: [
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    CommonModule,
    BrowserModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }, // <-- debugging purposes only (true)
    ),
  ],
  exports: [
    BrowserAnimationsModule,
    LayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
