import { Component } from '@angular/core';
import {CandidatureService} from "../../services/candidature.service";
import {StorageService} from "../../services/storage.service";
import {BsModalService} from "ngx-bootstrap/modal";
import {ActivatedRoute, Router} from "@angular/router";
import {Candidature} from "../../models/candidature";
import {NgxTimelineEvent} from "@frxjs/ngx-timeline";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  protected status: any;
  ToShow: Candidature[] = [];
  timelines: NgxTimelineEvent[] = [];

  constructor(
    private candidatureService: CandidatureService,
    private aroute: ActivatedRoute
  ) {}
  getCandid(candidatureId: any){
    this.candidatureService.getStatusByCandidatureId(candidatureId).subscribe(
      (status) => {
        console.log('Statut de la candidature:', status);
        this.status = status;
      },
      (error) => {
        console.error('Erreur lors de la récupération du statut de la candidature', error);
      }
    );
  }
  id:any;
  ngOnInit(): void {

     this.aroute.params.subscribe(data =>{
       this.id=this.aroute.snapshot.params['candidatureId'];
       this.getCandid(this.id);
     })

    console.log(this.id);}

}

