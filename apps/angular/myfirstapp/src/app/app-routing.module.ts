import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';

const routes: Routes = [
  { path: 'createemployee', component: HomeComponent},
  {path: 'login', component: EmployeeComponent},
  {path: 'editemployee', component: EditemployeeComponent},
  {path: 'viewemployee', component: ViewemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
