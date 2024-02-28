import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OffreService} from "../../services/offre.service";
import {Offre} from "../../models/offre.model";

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css']
})
export class ModifComponent implements OnInit{
  constructor(private offreService:OffreService,private router:Router,public route: ActivatedRoute) { }
  id:any;
  offre: any;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['idOffre'];
    this.offreService.getOffre(this.id).subscribe(
      data=>{
        this.offre=data;
      }
    )
  }
  update(): void {

    this.offreService.modifOffre( this.offre).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);});
  }

}
