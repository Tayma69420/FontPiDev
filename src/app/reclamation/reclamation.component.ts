import { Component, OnInit } from '@angular/core';
import { Reclamation } from "../models/reclamation.model";
import { ReclamationService } from "../services/reclamation.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  ToShow: Reclamation[] = [];

  ngOnInit(): void {
    this.loadReclamations();
  }

  goToAdd() {
    this.router.navigate(['ajouterrec']);
  }

  constructor(private reclamationService: ReclamationService, private router: Router) {
  }

  loadReclamations() {
    this.reclamationService.getAll().subscribe(
      (data) => {
        this.ToShow = data;
      }
    );
  }

  delete(idReclamation: any) {
    const confirmDelete = window.confirm('Are you sure you want to delete the reclamation?');

    if (confirmDelete) {
      this.reclamationService.removeReclamation(idReclamation).subscribe(
        data => {
          console.log("Deleted");
          // Update ToShow by removing the item with the specified idReclamation
          this.ToShow = this.ToShow.filter(item => item.idReclamation !== idReclamation);
        },
        error => {
          console.error("Error deleting reclamation:", error);
        }
      );
    }
  }
  modifier(idReclamation: any) {
    const confirmModifier = window.confirm('Are you sure you want to modify this reclamation?');

    if (confirmModifier) {
      this.router.navigate(['modifRec/' + idReclamation]);
    }
  }

}
