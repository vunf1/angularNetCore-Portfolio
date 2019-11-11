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
import { AngularFontAwesomeModule } from "angular-font-awesome";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { HttpClientModule } from "@angular/common/http";

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
import {
    FooterComponent,
} from "./navigation/footer/footer.component";
import { EmailFormComponent } from "./validator/emailForm/emailForm.component";
import { EducationComponent } from "./container/education/education.component";
import { RecaptchaModule } from "ng-recaptcha";
import { SkillsComponent } from "./container/skills/skills.component";

import { InterestsComponent } from "./container/interests/interests.component";
import {appRoutes} from "../app/routes/routeLink";
import { CertificationsComponent } from "./container/certifications/certifications.component";
import { NotFoundComponent } from "./errors/notFound/notFound.component";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ExperienceComponent,
    EmailFormComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    CertificationsComponent,
    NotFoundComponent,
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    RecaptchaModule,
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
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false, // <-- debugging purposes only (true)
       },
    ),
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,
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
