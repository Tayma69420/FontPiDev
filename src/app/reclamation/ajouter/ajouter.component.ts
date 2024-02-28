import {Component, OnInit} from '@angular/core';
import { Reclamation } from "../../models/reclamation.model";
import { ReclamationService } from "../../services/reclamation.service";
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent  implements OnInit{

  reclamation: Reclamation = {
    titre: '',
    description: '',
    dateDeReclamation: new Date(),
    status: false,
    image: ''
  };

  submitted = false;

  constructor(private reclamationService: ReclamationService, private tokenStorageService: StorageService) {
  }

  ngOnInit(): void {
  }

  save(): void {
    this.reclamationService.addReclamation(this.tokenStorageService.getUser().id, this.reclamation).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
        this.reclamation = { // reset the form after successful submission
          titre: '',
          description: 'hay',
          dateDeReclamation: new Date(),
          status: false,
          image: 'hay'
        };
      },
      error => {
        console.error("Error adding reclamation:", error);
      }
    );
  }
}
