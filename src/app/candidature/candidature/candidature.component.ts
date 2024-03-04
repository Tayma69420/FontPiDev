import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CandidatureService} from "../../services/candidature.service";
import {StorageService} from "../../services/storage.service";
import {Candidature} from "../../models/candidature";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {Observable} from "rxjs";

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {
  private status: any;
  constructor(
    private candidatureService: CandidatureService,
    private tokenStorageService: StorageService,
    private modalService: BsModalService,
    private router: Router,
  private aroute: ActivatedRoute
  ) {}

  ToShow: Candidature[] = [];
  candidature : any;

  // @ts-ignore
  selectedCandidature: Candidature = {
    experience: '',
    langues: ''
  };

  bsModalRef: BsModalRef | undefined;

  loadCandidaturesForUser(userId: number) {
    this.candidatureService.getCandidaturesForUser(userId).subscribe(
      (data) => {
        this.ToShow = data;
      },
      (error) => {
        console.error("Erreur lors de la récupération des candidatures de l'utilisateur", error);
      }
    );
  }

  delete(idCandidature: any) {
    this.candidatureService.removeCandidature(idCandidature).subscribe(
      () => {
        console.log("Supprimé");
        this.ToShow = this.ToShow.filter(item => item.idCandidature !== idCandidature);
      },
      (error) => {
        console.error("Erreur lors de la suppression de la candidature:", error);
      }
    );
  }

  updateCandidature(): void {
    if (this.selectedCandidature) {
      this.candidatureService.editCandidature(this.selectedCandidature).subscribe(
        response => {
          console.log("Candidature mise à jour avec succès:", response);
          this.closeModal();
        },
        error => {
          console.log("Erreur lors de la mise à jour de la candidature:", error);
        }
      );
    } else {
      console.error("Selected candidature is undefined or null:", this.selectedCandidature);
      console.log(this.selectedCandidature);
    }
  }


  openModal(template: any, candidature: any): void {
    console.log("Candidature before opening modal:", candidature);

    if (candidature.idCandidature) {
      this.selectedCandidature = { ...candidature };

      console.log("Selected candidature after opening modal:", this.selectedCandidature);
      this.bsModalRef = this.modalService.show(template);
    } else {
      console.error("Cannot update candidature without an ID");
    }
  }

  closeModal(): void {
    this.bsModalRef?.hide();
  }
  navigateToDetails(candidatureId: number) {
    this.router.navigate(['/details', candidatureId]);
  }
  /*getCandid(candidatureId: any){
  this.candidatureService.getStatusByCandidatureId(candidatureId).subscribe(
(status) => {
  console.log('Statut de la candidature:', status);
  this.status = status;
},
(error) => {
  console.error('Erreur lors de la récupération du statut de la candidature', error);
}
);
}*/

id: any;
  ngOnInit(): void {
    const userId = this.tokenStorageService.getUser().id;
    this.loadCandidaturesForUser(userId);
   /* this.aroute.params.subscribe(data =>{
      this.id=this.aroute.snapshot.params['candidatureId'];
    })*/

  console.log(this.id);}

}
