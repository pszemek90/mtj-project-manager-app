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
import { AddCategoryComponent } from './project/options-navbar/add-category/add-category.component';
import {ModalModule} from "ng-uikit-pro-standard";
import { ModalComponent } from './modal/modal.component';



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
    AddCategoryComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ModalModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
