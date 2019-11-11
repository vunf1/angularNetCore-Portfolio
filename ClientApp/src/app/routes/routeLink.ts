import { Routes } from "@angular/router";

import { AboutComponent } from "../container/about/about.component";
import { ExperienceComponent } from "../container/experience/experience.component";
import { EducationComponent } from "../container/education/education.component";
import { SkillsComponent } from "../container/skills/skills.component";
import { InterestsComponent } from "../container/interests/interests.component";
import { CertificationsComponent } from "../container/certifications/certifications.component";
import { NotFoundComponent } from "../errors/notFound/notFound.component";

export const appRoutes: Routes = [{
  path: "",
  redirectTo: "about",
  pathMatch: "full",
},
{
  path: "about",
  component: AboutComponent,
},
{
  path: "experience",
  component: ExperienceComponent,
},
{
  path: "education",
  component: EducationComponent,
},
{
  path: "skills",
  component: SkillsComponent,
},
{
  path: "interests",
  component: InterestsComponent,
},
{
  path: "certifications",
  component: CertificationsComponent,
},
{ path: "**", component: NotFoundComponent },
];
