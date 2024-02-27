import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ReclamationComponent} from "./reclamation/reclamation.component";

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'reclamations', component: ReclamationComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
