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

let ModeratorGuard;
let UserGuard;
const routes: Routes = [
  {path:'',component:HomeComponent},
  { path:'login', component: LoginComponent },
  { path:'reclamations', component: ReclamationComponent,canActivate:[AdminGuard] },
  { path:'offres', component: OffreComponent },
  { path:'addoffre',component:AddoComponent,canActivate:[ExposantGuard,EtudiantGuard] },
  { path:'modifoff/:idOffre', component: ModifComponent },
  { path:'access-denied',component:AccessDeniedComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
