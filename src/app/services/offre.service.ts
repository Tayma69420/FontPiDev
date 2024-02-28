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
    return this.http.get<Offre[]>("http://localhost:8075/api/auth/getAllO");
  }
  addOffre(idUser:any,data:any):Observable<any>{
    return this.http.post("http://localhost:8075/api/auth/addOffreAndAssignOffreToUser/" +idUser,data);
  }
  modifOffre(data:any):Observable<any>{
    return this.http.put("http://localhost:8075/api/auth/modifierOffre",data);
  }
  getOffre(idOffre:any): Observable<Offre[]> {
    return this.http.get<Offre[]>("http://localhost:8075/api/auth/getOffre/" + idOffre);
  }
}
