"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var about_component_1 = require("../container/about/about.component");
var experience_component_1 = require("../container/experience/experience.component");
var education_component_1 = require("../container/education/education.component");
var skills_component_1 = require("../container/skills/skills.component");
var interests_component_1 = require("../container/interests/interests.component");
var certifications_component_1 = require("../container/certifications/certifications.component");
var notFound_component_1 = require("../errors/notFound/notFound.component");
exports.appRoutes = [{
        path: "",
        component: about_component_1.AboutComponent,
    },
    {
        path: "about",
        component: about_component_1.AboutComponent,
    },
    {
        path: "experience",
        component: experience_component_1.ExperienceComponent,
    },
    {
        path: "education",
        component: education_component_1.EducationComponent,
    },
    {
        path: "skills",
        component: skills_component_1.SkillsComponent,
    },
    {
        path: "interests",
        component: interests_component_1.InterestsComponent,
    },
    {
        path: "certifications",
        component: certifications_component_1.CertificationsComponent,
    },
    { path: "**", component: notFound_component_1.NotFoundComponent },
];
//# sourceMappingURL=routeLink.js.map