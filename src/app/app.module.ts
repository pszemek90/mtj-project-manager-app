import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './sidenav/navbar/navbar.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectComponent} from './project/project.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {AddProjectComponent} from './add-project/add-project.component';
import {OptionsNavbarComponent} from './project/options-navbar/options-navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {AddCategoryComponent} from "./project/options-navbar/modals/add-category/add-category.component";
import {MatTabsModule} from "@angular/material/tabs";
import {AddMessageComponent} from './project/options-navbar/modals/add-message/add-message.component';
import {MessageComponent} from './message/message.component';
import {ProjectFilterPipe} from './shared/project-filter.pipe';
import {LoginComponent} from './login/login.component';
import {authInterceptorProviders} from './helpers/auth.interceptor';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {AddUserComponent} from './add-user/add-user.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {BreadcrumbModule} from "primeng/breadcrumb";
import {SidenavComponent} from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from "@angular/material/icon";
import { SidenavButtonsComponent } from './sidenav/sidenav-buttons/sidenav-buttons.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    ProjectComponent,
    AddProjectComponent,
    OptionsNavbarComponent,
    AddCategoryComponent,
    AddMessageComponent,
    MessageComponent,
    ProjectFilterPipe,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddUserComponent,
    BreadcrumbComponent,
    SidenavComponent,
    SidenavButtonsComponent,
  ],
    imports: [
      BrowserModule,
      HttpClientModule,
      NgbModule,
      FormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatDialogModule,
      MatTabsModule,
      BreadcrumbModule,
      MatSidenavModule,
      MatIconModule,
      MatChipsModule,
      MatFormFieldModule
    ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
