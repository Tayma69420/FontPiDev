import {Component, OnInit} from '@angular/core';
import {OffreService} from "../services/offre.service";
import {Router} from "@angular/router";
import {Offre} from "../models/offre.model";
import {StorageService} from "../services/storage.service";
import {add} from "ngx-bootstrap/chronos";

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit{


  filteredOffers: any[] = [];
  filterText: string = '';
  constructor(private offreService:OffreService,private router:Router,private tokenStorageService:StorageService){}
  ToShow:Offre[]=[];
  loadOffres() {
    this.offreService.getAll().subscribe(
      (data) => {
        this.ToShow = data;
        //console.log(this.ToShow.qrcode)
        this.filteredOffers = this.ToShow;
      }

    );
  }
  roleConnected:any;
  ngOnInit(): void {
    this.loadOffres();
    this.roleConnected = this.tokenStorageService.getUser().role
  }
   /* goToAdd(){
      this.router.navigate(['addoffre']);
    }*/
  edit(idOffre: any) {
    this.router.navigate(['modifoff/' + idOffre]);
  }
  delete(idOffre: any) {
    this.offreService.deleteOffre(idOffre).subscribe(
        data=>{
          window.location.reload();
        }
        )
  }
  detailsAdmin(idOffre:any){
    this.router.navigate(['detailsoffre/' + idOffre]);
  }
  filterOffers() {
    this.filteredOffers = this.ToShow.filter(offer =>
        offer.intitule && offer.intitule.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
  detailsEtudiant(idOffre:any){
    this.router.navigate(['detailsoffree/' + idOffre]);
  }
  postuler(idOffre:any){
    this.router.navigate(['postuler/' + idOffre]);
  }


  protected readonly add = add;
}
