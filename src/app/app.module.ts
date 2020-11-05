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
import { TabItemComponent } from './project/tabs/tab-item/tab-item.component';
import { TabLabelComponent } from './project/tabs/tab-item/tab-label/tab-label.component';
import { TabBodyComponent } from './project/tabs/tab-item/tab-body/tab-body.component';
import { TabsComponent } from './project/tabs/tabs.component';
import { OptionsNavbarComponent } from './project/options-navbar/options-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {ModalComponent} from "./project/options-navbar/modal/modal.component";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    ProjectComponent,
    AddProjectComponent,
    TabItemComponent,
    TabLabelComponent,
    TabBodyComponent,
    TabsComponent,
    OptionsNavbarComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
