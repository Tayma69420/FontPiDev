import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Reclamation } from "../models/reclamation.model";
import { ReclamationService } from "../services/reclamation.service";
import { Router } from "@angular/router";
import { Chart } from 'chart.js';
//import 'chartjs-adapter-date-fns';



@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  ToShow: Reclamation[] = [];

  public chart: any;
  totalReclamations:any;
  private chartInfo: any;
  private labeldata: any[] = ['Traité', 'Non Traité'];
  private realdata: any[] = [0,0];
  loadReclamations() {
    this.reclamationService.getAll().subscribe(
      (data) => {
        this.chartInfo = data;
        this.ToShow = data;
        if (this.chartInfo != null) {
          this.totalReclamations = this.chartInfo.length;

          for (let i = 0; i < this.totalReclamations; i++) {
            const isTraite = this.chartInfo[i].status; // Suppose status is a boolean indicating whether it's treated or not
            const index = isTraite ? 0 : 1; // If treated, index is 0; if not treated, index is 1
            this.realdata[index]++;
          }

          this.calculatePercentages();
          this.createChart(this.labeldata, this.realdata);
        }
      }
    );
  }

  calculatePercentages() {
    for (let i = 0; i < this.realdata.length; i++) {
      this.realdata[i] = (this.realdata[i] / this.totalReclamations) * 100;
    }
  }
  ngOnInit(): void {
    this.loadReclamations();

  }

  goToAdd() {
    this.router.navigate(['ajouterrec']);
  }

  constructor(private reclamationService: ReclamationService, private router: Router) {
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

  createChart(labeldata: any, realdata: any/*, colordata: any*/) {
    this.chart = new Chart('MyChart', {
      type: 'pie',
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'Le nombre des cautions correspondant pour chaque etat',
            data: realdata,
            //backgroundColor: colordata,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 2,
      },
    });
  }
  updateStatus(reclamation: Reclamation) {
    // Update the status in the database
    this.reclamationService.editReclamation(reclamation).subscribe(
      (data) => {
        console.log('Status updated successfully:', data);
      },
      (error) => {
        console.error('Error updating status:', error);
      }
    );
  }

  sortByStatus() {
    this.ToShow.sort((a, b) => {


      // Handle undefined case by considering it greater than any boolean value
      const statusA = a.status !== undefined ? a.status : true;
      const statusB = b.status !== undefined ? b.status : true;

      // Compare the status values
      if (statusA && !statusB) {
        return 1;
      } else if (!statusA && statusB) {
        return -1;
      } else {
        return 0;
      }
    });
  }









}
