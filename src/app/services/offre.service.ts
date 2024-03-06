import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Offre} from "../models/offre.model";

@Injectable({
  providedIn: 'root'
})

export class OffreService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Offre[]> {
    return this.http.get<Offre[]>("http://localhost:8075/api/v1/auth/getAllO");
  }
  getMyAll(id:any): Observable<Offre[]> {
    return this.http.get<Offre[]>("http://localhost:8075/api/v1/auth/getMyOffres/" + id);
  }
  addOffre(idUser:any,data:any,idSession:any):Observable<any>{
    return this.http.post("http://localhost:8075/api/v1/auth/addOffreAndAssignToUserAndToSession/" +idUser + "/" + idSession,data);
  }
  modifOffre(data:any):Observable<any>{
    return this.http.put("http://localhost:8075/api/v1/auth/modifierOffre",data);
  }
  getOffre(idOffre:any): Observable<Offre[]> {
    return this.http.get<Offre[]>("http://localhost:8075/api/v1/auth/getOffre/" + idOffre);
  }
  deleteOffre(idOffre:any):Observable<any>{
    return this.http.delete('http://localhost:8075/api/v1/auth/supprimerOffre/' + idOffre)
  }
}
