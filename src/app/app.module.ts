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
import { CandidatureComponent } from './candidature/candidature/candidature.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModalModule} from "ngx-bootstrap/modal";
import { DetailsComponent } from './candidature/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    OffreComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ReclamationComponent,
    SignupComponent,
    CandidatureComponent,
    DetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
