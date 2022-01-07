import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createComponent } from './createemployee/create.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { loginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChaildBComponent } from './chaild-b/chaild-b.component';
import { RoutingService } from './routing.service';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginserverService } from './loginserver.service';
import { CreateDepartment } from './createdepartment/CreateDepartment.component';
import {MessagingModule} from "@angular/fire/messaging";
 


@NgModule({
  declarations: [
    AppComponent,
    createComponent,
    EditemployeeComponent,
    loginComponent,
    ViewemployeeComponent,
    HomeComponent,
    CreateDepartment,
    PageNotFoundComponent,
    TestComponent,
    ChildAComponent,
    ChaildBComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
   MessagingModule
  ],
  providers: [RoutingService,AuthGuardGuard,LoginserverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
