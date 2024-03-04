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
import {httpInterceptorProviders} from "./_helpers/http.interceptor";
import {AjouterComponent} from "./reclamation/ajouter/ajouter.component";
import { ModifierComponent } from './reclamation/modifier/modifier.component';
import { MesreclamationComponent } from './reclamation/mesreclamation/mesreclamation.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    OffreComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ReclamationComponent,
    SignupComponent,
    AjouterComponent,
    ModifierComponent,
    MesreclamationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
