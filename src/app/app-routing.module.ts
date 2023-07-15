import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { SignupComponent } from './modules/auth/components/signup/signup.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomepageComponent } from './modules/base/components/homepage/homepage.component';
import { AddfoldersComponent } from './modules/base/components/addfolders/addfolders.component';


const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"addfile", component:AddfoldersComponent},
  {path:"", component: HomepageComponent},
  {path:"**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
