import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
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
import {DetailsComponent} from "./offre/details/details.component";
import {IntrouvableComponent} from "./introuvable/introuvable.component";
import {AccessDeniedComponent} from "./access-denied/access-denied.component";
import { MesoffresComponent } from './offre/mesoffres/mesoffres.component';
import { DetailsforexposantComponent } from './offre/detailsforexposant/detailsforexposant.component';
import { NgChartsModule } from 'ng2-charts';
import { AjouterComponent } from "./reclamation/ajouter/ajouter.component";
import { ModifierComponent } from './reclamation/modifier/modifier.component';
import { MesreclamationComponent } from './reclamation/mesreclamation/mesreclamation.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { DetailscandComponent } from './candidature/detailscand/detailscand.component';
import { MescandidaturesComponent } from './candidature/mescandidatures/mescandidatures.component';
import { WorkflowComponent } from './candidature/workflow/workflow.component';
import { EditcandComponent } from './candidature/editcand/editcand.component';
import { PostulerComponent } from './candidature/postuler/postuler.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MaterielComponent } from './materiel/materiel.component';
import { AddmaterielComponent } from './materiel/addmateriel/addmateriel.component';
import { UpdatematerielComponent } from './materiel/updatemateriel/updatemateriel.component';
import { SessionComponent } from './session/session.component';
import { AddsessionComponent } from './session/addsession/addsession.component';
import { UpdatesessionComponent } from './session/updatesession/updatesession.component';

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
    AccessDeniedComponent,
    IntrouvableComponent,
    DetailsComponent,
    MesoffresComponent,
    DetailsforexposantComponent,
      AjouterComponent,
      ModifierComponent,
      MesreclamationComponent,
      CandidatureComponent,
      DetailscandComponent,
      MescandidaturesComponent,
      WorkflowComponent,
      EditcandComponent,
      PostulerComponent,
    SessionComponent,
    AddsessionComponent,
    UpdatesessionComponent,
    CalendarComponent,
    MaterielComponent,
    AddmaterielComponent,
    UpdatematerielComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgChartsModule,

    ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
