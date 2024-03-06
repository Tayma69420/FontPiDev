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
import {MesreclamationComponent} from "./reclamation/mesreclamation/mesreclamation.component";
import {ModifierComponent} from "./reclamation/modifier/modifier.component";
import {AjouterComponent} from "./reclamation/ajouter/ajouter.component";
import {DetailscandComponent} from "./candidature/detailscand/detailscand.component";
import {CandidatureComponent} from "./candidature/candidature.component";
import {MescandidaturesComponent} from "./candidature/mescandidatures/mescandidatures.component";
import {WorkflowComponent} from "./candidature/workflow/workflow.component";
import {EditcandComponent} from "./candidature/editcand/editcand.component";
import {PostulerComponent} from "./candidature/postuler/postuler.component";


const routes: Routes = [
  {path:'',component:HomeComponent},
  { path:'login', component: LoginComponent },
  { path:'offres', component: OffreComponent ,canActivate:[EtudiantGuard] },
  { path:'offress', component: OffreComponent ,canActivate:[AdminGuard] },
  { path:'addoffre',component:AddoComponent,canActivate:[ExposantGuard] },
  //{ path:'details/:idOffre',component:DetailsforexposantComponent},
  { path:'modifoff/:idOffre', component: ModifComponent,canActivate:[ExposantGuard] },
  { path:'detailsoffre/:idOffre',component:DetailsComponent,canActivate:[ExposantGuard] } ,
  { path:'detailsoffree/:idOffre',component:DetailsComponent,canActivate:[AdminGuard] } ,
  { path:'mesoffres',component:MesoffresComponent,canActivate:[ExposantGuard] },
  { path:'reclamations', component: ReclamationComponent,canActivate:[AdminGuard] },
  { path:'ajouterrec', component: AjouterComponent,canActivate:[ExposantGuard]},
  { path:'ajouterre', component: AjouterComponent,canActivate:[EtudiantGuard]},
  { path:'modifRec/:idReclamation', component: ModifierComponent,canActivate:[EtudiantGuard]},
  { path:'modifRecl/:idReclamation', component: ModifierComponent,canActivate:[ExposantGuard]},
  { path:'mesreclamation', component: MesreclamationComponent,canActivate:[EtudiantGuard]},
  { path:'mesreclamatios', component: MesreclamationComponent,canActivate:[ExposantGuard]},
  { path:'candidatures', component:CandidatureComponent,canActivate:[AdminGuard]},
  { path:'detailscand/:idCandidature',component:DetailscandComponent,canActivate:[ExposantGuard]},
  { path:'detailscan/:idCandidature',component:DetailscandComponent,canActivate:[AdminGuard]},
  { path:'mescandidatures',component:MescandidaturesComponent,canActivate:[EtudiantGuard]},
  { path:'workflow/:idCandidature',component:WorkflowComponent,canActivate:[EtudiantGuard]},
  { path:'editcand/:idCandidature',component:EditcandComponent,canActivate:[EtudiantGuard]},
  { path:'editcandi/:idCandidature',component:EditcandComponent,canActivate:[ExposantGuard]},
  { path:'postuler/:idOffre',component:PostulerComponent,canActivate:[EtudiantGuard]},
  { path:'access-denied',component:AccessDeniedComponent},
  { path:'**',component:IntrouvableComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
