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
  MatSidenavModule,
} from "@angular/material/sidenav";
import {
  MatIconModule,
} from "@angular/material/icon";
import {
  MatToolbarModule,
} from "@angular/material/toolbar";
import {
  MatListModule,
} from "@angular/material/list";
import {
  LayoutModule,
} from "@angular/cdk/layout";
import {
  MatGridListModule,
} from "@angular/material/grid-list";
import {
  MatExpansionModule,
} from "@angular/material/expansion";
import {
  MatButtonModule,
} from "@angular/material";

/** ! Independent */
import {
  AppComponent,
} from "./app.component";
import {
  HeaderComponent,
} from "./navigation/header/header.component";
import {
  SidebarComponent,
} from "./navigation/sidebar/sidebar.component";

import {
  AboutComponent,
} from "./container/about/about.component";
import {
  ExperienceComponent,
} from "./container/experience/experience.component";

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
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    SidebarComponent,
  ],
  imports: [
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    LayoutModule,
    MatGridListModule,
    CommonModule,
    BrowserModule,
    MatExpansionModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }, // <-- debugging purposes only (true)
    ),
  ],
  exports: [
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    LayoutModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
