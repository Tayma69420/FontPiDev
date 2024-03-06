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
  roleConnected:any;
  ngOnInit(): void {
    this.roleConnected=this.tokenStorageService.getUser().role;
  }

  onFileChange(event: any): void {
    const file = event?.target?.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (this.reclamation) {
          this.reclamation.image = '/assets/' + file.name;
        }
      };

      reader.readAsDataURL(file);
    }
  }

  save(): void {
    this.onFileChange(event);

    this.reclamationService.addReclamation(this.tokenStorageService.getUser().id, this.reclamation).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
        this.reclamation = {
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
    this.router.navigate(['mesreclamation']);
  }
  save1(): void {
    this.onFileChange(event);

    this.reclamationService.addReclamation(this.tokenStorageService.getUser().id, this.reclamation).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
        this.reclamation = {
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
    this.router.navigate(['mesreclamatios']);
  }
}
