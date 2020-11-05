import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {AddProjectComponent} from "./add-project/add-project.component";
import {ProjectComponent} from "./project/project.component";
import {AddCategoryComponent} from "./project/options-navbar/add-category/add-category.component";

const routes: Routes = [
  {
    path:'project/:uuid',
    component:ProjectComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'add',
    component:AddProjectComponent
  },
  {
    path: '',
    component:ProjectsComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
