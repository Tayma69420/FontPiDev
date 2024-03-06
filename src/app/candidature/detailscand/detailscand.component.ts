import {Component, OnInit} from '@angular/core';
import {CandidatureService} from "../../services/candidature.service";
import {OffreService} from "../../services/offre.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-detailscand',
  templateUrl: './detailscand.component.html',
  styleUrls: ['./detailscand.component.css']
})
export class DetailscandComponent implements OnInit{
  constructor(private condidatureService:CandidatureService,private aroute: ActivatedRoute,private tokenStorageService: StorageService,private router:Router) {
  }
  id:any;
  cand:any;
  ngOnInit(): void {

    this.aroute.params.subscribe(data =>{
      this.id=this.aroute.snapshot.params['idCandidature'];
    })
    this.condidatureService.getByCandidatureId(this.id).subscribe(
      data=>{
        this.cand=data

      }
    )
  }

}
