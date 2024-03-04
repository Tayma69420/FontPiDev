import {Component, OnInit} from '@angular/core';
import {OffreService} from "../../services/offre.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  constructor(private offreService:OffreService,private aroute: ActivatedRoute,private tokenStorageService: StorageService,private router:Router) { }

  id:any;
  offre:any;
  roleConnected:any;
  ngOnInit(): void {

    this.roleConnected = this.tokenStorageService.getUser().role;
    this.aroute.params.subscribe(data =>{
      this.id=this.aroute.snapshot.params['idOffre'];
    })
    this.offreService.getOffre(this.id).subscribe(
        data=>{
            this.offre=data

        }
    )

  }

}
