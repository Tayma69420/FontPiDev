import {Component, OnInit} from '@angular/core';
import {Reclamation} from "../models/reclamation.model";
import {ReclamationService} from "../services/reclamation.service";

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit{
  ToShow:Reclamation[]=[];
  ngOnInit(): void {
    this.loadReclamations();
  }
  constructor(private reclamationService:ReclamationService) {
  }
  loadReclamations() {
    this.reclamationService.getAll().subscribe(
      (data) => {
        this.ToShow = data;
      }
    );
  }

}
