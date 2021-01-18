import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {AddProjectComponent} from "./add-project/add-project.component";
import {ProjectComponent} from "./project/project.component";
import {MessageComponent} from "./message/message.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AddUserComponent} from "./add-user/add-user.component";

const routes: Routes = [
  // {
  //   path:'projects/:uuid',
  //   component:ProjectComponent
  // },
  {
    path: 'projects',
    children: [
      {
        path:'',
        component: ProjectsComponent
      },
      {
        path: ':pUuid',
        data: {
          breadcrumb: 'Projekt'
        },
        children: [
          {
            path: '',
            data:{
              breadcrumb: null
            },
            component: ProjectComponent
          },
          {
            path: 'messages/:mUuid',
            data: {
              breadcrumb: 'Wiadomość'
            },
            component: MessageComponent
          }
        ]
      }
    ]
  },
  // {
  //   path:'projects/:pUuid/messages/:mUuid',
  //   component: MessageComponent
  // },
  {
    path: 'add-project',
    component:AddProjectComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
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
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
