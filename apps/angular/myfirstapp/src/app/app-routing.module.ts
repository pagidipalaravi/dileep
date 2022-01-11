import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { loginComponent } from './login/login.component';
import { createComponent } from './createemployee/create.component';
import { HomeComponent } from './home/home.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { CreateDepartment } from './createdepartment/CreateDepartment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChaildBComponent } from './chaild-b/chaild-b.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'createemployee', component: createComponent},
  {path: 'login', component: loginComponent },
  {path: 'editemployee', component: EditemployeeComponent},
  {path: 'viewemployee', component: ViewemployeeComponent},
  {path: 'test', component: TestComponent, },
  {path: 'department', component:CreateDepartment},
  {
    path: 'first-component', component: TestComponent,
    children: [
      { path: '../child-a',  component: ChildAComponent, },
      {
        path: '../child-b',component: ChaildBComponent, 
      },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
