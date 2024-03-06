import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Offre } from '../../models/offre.model';
import { StorageService } from '../../services/storage.service';
import { OffreService } from '../../services/offre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addo',
  templateUrl: './addo.component.html',
  styleUrls: ['./addo.component.css'],
})
export class AddoComponent {
  offreForm: FormGroup;
  submitted = false;

  constructor(
      private router: Router,
      private offerService: OffreService,
      private tokenStorageService: StorageService,
      private fb: FormBuilder
  ) {
    this.offreForm = this.fb.group({
      intitule: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(15)]],
      nbPlaces: [undefined, Validators.required],
    });
  }

  saveOffre(): void {
    if (this.offreForm.valid) {
      const offre: Offre = {
        description: this.offreForm.value.description,
        intitule: this.offreForm.value.intitule,
        nbPlaces: this.offreForm.value.nbPlaces,
        image:this.tokenStorageService.getUser().image,
        dateDeCreation:new Date()
      };

      this.offerService
          .addOffre(this.tokenStorageService.getUser().id, offre, 1)
          .subscribe((data) => {
            this.submitted = true;
          });

      this.router.navigate(['mesoffres']);
    } else {

      this.offreForm.markAllAsTouched();
    }
  }
}
