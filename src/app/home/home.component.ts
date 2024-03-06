import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {ReclamationService} from "../services/reclamation.service";
import {StorageService} from "../services/storage.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private reclamationService: ReclamationService,private tokenStorageService:StorageService) {
  }
  public chart: any;
  totalReclamations:any;
  private chartInfo: any;
  private labeldata: any[] = ['Traité', 'Non Traité'];
  private realdata: any[] = [0,0];
  private colorsesprit:any[] =['#FFE6E3','#F5C1C1']
  prepareToChart() {
    this.reclamationService.getAll().subscribe(
        (data) => {
          this.chartInfo = data;
          if (this.chartInfo != null) {
            this.totalReclamations = this.chartInfo.length;

            for (let i = 0; i < this.totalReclamations; i++) {
              const isTraite = this.chartInfo[i].status;
              const index = isTraite ? 0 : 1;
              this.realdata[index]++;
            }
            this.calculatePercentages();
            this.createChart(this.labeldata, this.realdata,this.colorsesprit);
          }
        }
    );
  }

  calculatePercentages() {
    for (let i = 0; i < this.realdata.length; i++) {
      this.realdata[i] = (this.realdata[i] / this.totalReclamations) * 100;
    }
  }
  createChart(labeldata: any, realdata: any, colorsesprit: any) {
    this.chart = new Chart('MyChart', {
      type: 'pie',
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'Le nombre des reclamtion correspondant pour chaque status',
            data: realdata,
            backgroundColor: colorsesprit,
            hoverBackgroundColor:colorsesprit,
            hoverBorderColor:colorsesprit,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context: any) {
                const labelIndex = context.dataIndex;
                return labeldata[labelIndex] + ': ' + realdata[labelIndex].toFixed(2) + '%';
              },
            },
          },
        },
      },
    });
  }
  roleConnected:any;



  ngOnInit() {
    this.prepareToChart();
    this.roleConnected = this.tokenStorageService.getUser().role;
  }

}
