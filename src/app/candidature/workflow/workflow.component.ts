import {Component, OnInit} from '@angular/core';
import {CandidatureService} from "../../services/candidature.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit{

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

  protected readonly status = status;
}
