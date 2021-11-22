import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditemployeeComponent,
    EmployeeComponent,
    ViewemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
