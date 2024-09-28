import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ErrorComponent } from './error/error.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'education',component:EducationComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'skills',component:SkillsComponent},
  {path:'resume',component:ResumeComponent},
  {path:'',redirectTo: '/home',pathMatch:'full'},
  
  {path:'**' ,component:ErrorComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
