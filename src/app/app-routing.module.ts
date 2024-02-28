import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ReclamationComponent} from "./reclamation/reclamation.component";
import {AjouterComponent} from "./reclamation/ajouter/ajouter.component";
import {ModifierComponent} from "./reclamation/modifier/modifier.component";

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'reclamations', component: ReclamationComponent },
  { path:'ajouterrec', component: AjouterComponent},
  { path:'modifRec/:idReclamation', component: ModifierComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
