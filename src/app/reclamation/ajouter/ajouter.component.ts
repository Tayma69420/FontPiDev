import {Component, OnInit} from '@angular/core';
import { Reclamation } from "../../models/reclamation.model";
import { ReclamationService } from "../../services/reclamation.service";
import { StorageService } from "../../services/storage.service";
import {Router} from "@angular/router";

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

  constructor(private reclamationService: ReclamationService, private tokenStorageService: StorageService , private router: Router) {
  }

  ngOnInit(): void {
  }

  onFileChange(event: any): void {
    const file = event?.target?.files?.[0]; // Utilisez l'opérateur ?. pour éviter les erreurs si event, target ou files sont undefined

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // Assurez-vous que this.reclamation est défini avant d'accéder à sa propriété image
        if (this.reclamation) {
          this.reclamation.image = '/assets/' + file.name;
        }
      };

      reader.readAsDataURL(file);
    }
  }

  save(): void {
    // Appel de la fonction onFileChange pour construire le chemin d'enregistrement
    // à partir du fichier sélectionné avant d'ajouter la réclamation
    this.onFileChange(event);

    this.reclamationService.addReclamation(this.tokenStorageService.getUser().id, this.reclamation).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
        this.reclamation = { // reset the form after successful submission
          titre: '',
          description: '',
          dateDeReclamation: new Date(),
          status: false,
          image: ''
        };
      },
      error => {
        console.error("Error adding reclamation:", error);
      }
    );
    this.router.navigate(['reclamations']);
  }
}
