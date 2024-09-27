import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailSignUpComponent } from './email-sign-up/email-sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PlannerComponent } from './planner/planner.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'email-sign-up', component: EmailSignUpComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: PlannerComponent },
    ]
  },
  // other routes
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }