import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offre} from "../models/offre.model";
import {CandidatureComponent} from "../candidature/candidature/candidature.component";
import {Candidature} from "../models/candidature";

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  constructor(private http: HttpClient) {}
    getAll(): Observable<Candidature[]> {
      return this.http.get<Candidature[]>("http://localhost:8075/api/auth/getAllC");

  }
  removeCandidature(idCandidature: any): Observable<any> {
    return this.http.delete('http://localhost:8075/api/auth/supprimerCandidature/' + idCandidature);
  }
  getCandidaturesForUser(userId: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`http://localhost:8075/api/auth/getCandidaturesByUserId/${userId}`);
  }
  editCandidature( selectedCandidature: any): Observable<any> {
    return this.http.put('http://localhost:8075/api/auth/modifierCandidature' , selectedCandidature);

}
  getStatusByCandidatureId(idCandidature: any): Observable<any> {
    return this.http.get('http://localhost:8075/api/auth/getStatusByCandidId/' + idCandidature);
  }

}
