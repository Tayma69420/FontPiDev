import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ReclamationComponent} from "./reclamation/reclamation.component";
import {AdminComponent} from "./admin/admin.component";
import {ExposantComponent} from "./exposant/exposant.component";
import {EtudiantComponent} from "./etudiant/etudiant.component";

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'reclamations', component: ReclamationComponent },
  { path:'admin', component: AdminComponent },
  { path:'exposant', component: ExposantComponent },
  { path:'etudiant', component: EtudiantComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
