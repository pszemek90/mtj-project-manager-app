import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {AddProjectComponent} from "./add-project/add-project.component";
import {ProjectComponent} from "./project/project.component";
import {MessageComponent} from "./message/message.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path:'projects/:uuid',
    component:ProjectComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path:'projects/:pUuid/messages/:mUuid',
    component: MessageComponent
  },
  {
    path: 'add',
    component:AddProjectComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true, enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
