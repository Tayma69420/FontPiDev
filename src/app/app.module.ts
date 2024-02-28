import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffreComponent } from './offre/offre.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import { ReclamationComponent } from './reclamation/reclamation.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ExposantComponent } from './exposant/exposant.component';

@NgModule({
  declarations: [
    AppComponent,
    OffreComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ReclamationComponent,
    SignupComponent,
    AdminComponent,
    EtudiantComponent,
    ExposantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
