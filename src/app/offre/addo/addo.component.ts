import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Offre} from "../../models/offre.model";
import {StorageService} from "../../services/storage.service";
import {OffreService} from "../../services/offre.service";
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-addo',
  templateUrl: './addo.component.html',
  styleUrls: ['./addo.component.css']
})
export class AddoComponent{

  constructor(private router:Router,private offerService:OffreService,private tokenStorageService:StorageService) { }
  offre: Offre ={
    description:'',
    intitule:'',
    dateDeCreation:new Date(),
    nbPlaces:undefined,

  }
  submitted = false;
  saveOffre():void {
    const offre = {
      description: this.offre.description,
      intitule: this.offre.intitule,
      nbPlaces: this.offre.nbPlaces,
    };
    console.log(this.offre);
    this.offerService.addOffre(this.tokenStorageService.getUser().id,this.offre).subscribe(
      data =>{
        this.submitted=true;
  }
    )
   // this.router.navigate(['offres']);
}
}
