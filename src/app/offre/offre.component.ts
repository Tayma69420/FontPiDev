import {Component, OnInit} from '@angular/core';
import {OffreService} from "../services/offre.service";
import {Router} from "@angular/router";
import {Offre} from "../models/offre.model";

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit{


  constructor(private offreService:OffreService,private router:Router){}
  ToShow:Offre[]=[];
  loadOffres() {
    this.offreService.getAll().subscribe(
      (data) => {
        this.ToShow = data;
      }
    );
  }
  ngOnInit(): void {
    this.loadOffres();
  }
}
