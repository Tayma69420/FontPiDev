import {Component, OnInit} from '@angular/core';
import {OffreService} from "../../services/offre.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CandidatureService} from "../../services/candidature.service";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-editcand',
  templateUrl: './editcand.component.html',
  styleUrls: ['./editcand.component.css']
})
export class EditcandComponent implements OnInit{
  id: any;
  cand: any;
  cand1: any;
  connectedRole:any;
  constructor(private storageService:StorageService,private candidatureService: CandidatureService, private router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.connectedRole=this.storageService.getUser().role;
    this.id = this.route.snapshot.params['idCandidature'];
    this.candidatureService.getByCandidatureId(this.id).subscribe(
      data => {
        this.cand = data;
        this.cand1=data;
      }
    )
  }

  update(){
      this.candidatureService.editCandidature(this.cand).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
    this.router.navigate(['mescandidatures']);
  }
  update1() {
    if (this.cand1.status === 'Traitee') {
      this.cand1.dateDeMiseEnTrt = new Date();
      this.cand1.datedeRefus = null;
      this.cand1.dateDAcceptance = null;
    } else if (this.cand1.status === 'Refusee') {
      this.cand1.datedeRefus = new Date();
      this.cand1.dateDAcceptance = null;
    } else if (this.cand1.status === 'Acceptee') {
      this.cand1.datedeRefus = null;
      this.cand1.dateDAcceptance = new Date();
    }
    this.candidatureService.editCandidature(this.cand1).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  showRemarque = false;

  onStatusChange() {
    this.showRemarque = this.cand1.status === 'Refusee';
  }
}
