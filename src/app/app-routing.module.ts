import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"registration",
    component:RegistrationComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
