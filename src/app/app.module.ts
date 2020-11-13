import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { AddProjectComponent } from './add-project/add-project.component';
import { OptionsNavbarComponent } from './project/options-navbar/options-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {AddCategoryComponent} from "./project/options-navbar/modals/add-category/add-category.component";
import {MatTabsModule} from "@angular/material/tabs";
import { AddMessageComponent } from './project/options-navbar/modals/add-message/add-message.component';
import { MessageComponent } from './message/message.component';
import {ApiService} from "./shared/api.service";



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
    MatTabsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents: [AddCategoryComponent]
})
export class AppModule { }
