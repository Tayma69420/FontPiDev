import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffreComponent } from './offre/offre.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReclamationComponent } from './reclamation/reclamation.component';
import { SignupComponent } from './signup/signup.component';
import { AddoComponent } from './offre/addo/addo.component';
import { ModifComponent } from './offre/modif/modif.component';
/*import { EtudiantComponent } from './etudiant/etudiant.component';
import { AdminComponent } from './admin/admin.component';
import { ExposantComponent } from './exposant/exposant.component';*/
import { AccessDeniedComponent } from './access-denied/access-denied.component';
/*import {ExposantModule} from "./exposant/exposant.module";
import {EtudiantModule} from "./etudiant/etudiant.module";
import {AdminModule} from "./admin/admin.module";*/

@NgModule({
  declarations: [
    AppComponent,
    OffreComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ReclamationComponent,
    SignupComponent,
    AddoComponent,
    ModifComponent,
    AccessDeniedComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
      /*AdminModule,
      EtudiantModule,
      ExposantModule,*/
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
