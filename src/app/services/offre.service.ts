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
    return this.http.get<Offre[]>("http://localhost:8075/getAllO");
  }
  addOffre(data:any):Observable<any>{
    return this.http.post("http://localhost:8075/addOffre",data);
  }
}
