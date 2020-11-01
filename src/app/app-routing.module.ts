import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {AddProjectComponent} from "./add-project/add-project.component";

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: '',
    component:ProjectsComponent,
    pathMatch:'full'
  },
  {
    path: 'add',
    component:AddProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
