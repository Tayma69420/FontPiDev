import { Component } from '@angular/core';
import { ReclamationService } from "../../services/reclamation.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent {

  constructor(private reclamationService: ReclamationService, private router: Router, public route: ActivatedRoute) { }
  id: any;
  reclamation: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idReclamation'];
    this.reclamationService.findById(this.id).subscribe(
      data => {
        this.reclamation = data;
      }
    )
  }

  saveedit(): void {
    this.reclamationService.editReclamation(this.reclamation).subscribe(
      response => {
        console.log(response);
        // Navigate back to the reclamation list after successful edit
        this.router.navigate(['/reclamations']);
      },
      error => {
        console.log(error);
      });
  }
}
