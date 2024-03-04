import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ReclamationComponent} from "./reclamation/reclamation.component";
import {CandidatureComponent} from "./candidature/candidature/candidature.component";
import {OffreComponent} from "./offre/offre.component";
import {DetailsComponent} from "./candidature/details/details.component";

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'reclamations', component: ReclamationComponent },
  { path:'candidatures', component: CandidatureComponent },
  { path:'offres', component: OffreComponent },
  { path:'details/:candidatureId',component:DetailsComponent } ,

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
