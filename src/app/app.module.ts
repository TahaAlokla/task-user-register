import { AdminBoardComponent } from './components/admin-board/admin-board.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

import { UsersComponent } from './components/users/users.component';
import { Page404Component } from './components/page404/page404.component';
import { AdminModuleModule } from './modules/admin-module/admin-module.module';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomFormsModule } from 'ng2-validation'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    Page404Component,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AdminBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AdminModuleModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CustomFormsModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
