import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ErrorComponent } from './error/error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';




import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { ResumeComponent } from './resume/resume.component'
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainPageComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent,
    ErrorComponent,
    FooterComponent,
    ResumeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent,ResumeComponent]
})
export class AppModule { }



