import {Component, OnInit} from '@angular/core';
import {Candidature} from "../../models/candidature.model";
import {CandidatureService} from "../../services/candidature.service";
import {StorageService} from "../../services/storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Status} from "../../models/status.enum";

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit{
  id:any;
  ngOnInit() {
    this.aroute.params.subscribe(data =>{
      this.id=this.aroute.snapshot.params['idOffre'];
    })
  }

  constructor(private router:Router,private aroute: ActivatedRoute,private tokenStorageService:StorageService,private candidatureService:CandidatureService) {
  }
  candidature: Candidature = {
    experience: '',
    competence: '',
    dateDeCandidature: new Date(),
    langues:'',
    formation: '',
    status:Status.Encours,
    lettreDeMotivation: ''
  };
  onFileChange(event: any): void {
    const file = event?.target?.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (this.candidature) {
          this.candidature.lettreDeMotivation = '/assets/' + file.name;
        }
      };

      reader.readAsDataURL(file);
    }
  }
  save(): void {
    this.onFileChange(event);

   this.candidatureService.addCondidatureToUseretToOffre(this.tokenStorageService.getUser().id, this.id,this.candidature).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.error("Error adding reclamation:", error);
      }
    );
    //this.router.navigate(['mescandidatures']);
  }

}
