import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ReclamationComponent} from "./reclamation/reclamation.component";
import {OffreComponent} from "./offre/offre.component";
import {AddoComponent} from "./offre/addo/addo.component";
import {ModifComponent} from "./offre/modif/modif.component";

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'reclamations', component: ReclamationComponent },
  { path:'offres', component: OffreComponent },
  { path:'addoffre',component:AddoComponent },
  { path:'modifoff/:idOffre', component: ModifComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
