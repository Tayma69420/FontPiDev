import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ReclamationComponent} from "./reclamation/reclamation.component";
import {OffreComponent} from "./offre/offre.component";
import {AddoComponent} from "./offre/addo/addo.component";
import {ModifComponent} from "./offre/modif/modif.component";
import {AdminGuard} from "./guards/AdminGuard";
import {ExposantGuard} from "./guards/ExposantGuard";
import {EtudiantGuard} from "./guards/EtudiantGuard";
import {AccessDeniedComponent} from "./access-denied/access-denied.component";
import {IntrouvableComponent} from "./introuvable/introuvable.component";
import {DetailsComponent} from "./offre/details/details.component";
import {MesoffresComponent} from "./offre/mesoffres/mesoffres.component";
import {DetailsforexposantComponent} from "./offre/detailsforexposant/detailsforexposant.component";


const routes: Routes = [
  {path:'',component:HomeComponent},
  { path:'login', component: LoginComponent },
  { path:'reclamations', component: ReclamationComponent,canActivate:[AdminGuard] },
  { path:'offres', component: OffreComponent ,canActivate:[EtudiantGuard] },
  { path:'offress', component: OffreComponent ,canActivate:[AdminGuard] },
  { path:'addoffre',component:AddoComponent,canActivate:[ExposantGuard] },
  { path:'modifoff/:idOffre', component: ModifComponent,canActivate:[ExposantGuard] },
  { path:'detailss/offreee/:idOffre',component:DetailsforexposantComponent,canActivate:[ExposantGuard] },
  { path:'detailsoffre/:idOffre',component:DetailsComponent,canActivate:[AdminGuard] } ,
  { path:'detailsoffree/:idOffre',component:DetailsComponent,canActivate:[EtudiantGuard] } ,
  { path:'mesoffres',component:MesoffresComponent,canActivate:[ExposantGuard] },
  { path:'access-denied',component:AccessDeniedComponent},
  { path:'**',component:IntrouvableComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
