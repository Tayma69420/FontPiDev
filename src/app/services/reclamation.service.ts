import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reclamation} from "../models/reclamation.model";

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>("localhost:8075/api/auth/getAllr");
  }
}
