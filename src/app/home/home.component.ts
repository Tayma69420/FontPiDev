import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {ReclamationService} from "../services/reclamation.service";
import {StorageService} from "../services/storage.service";
import {OffreService} from "../services/offre.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private offreService:OffreService,private reclamationService: ReclamationService,private tokenStorageService:StorageService) {
  }
  public chart: any;
  totalReclamations:any;
  private chartInfo: any;
  private labeldata: any[] = ['Traité', 'Non Traité'];
  private realdata: any[] = [0,0];
  private colorsesprit:any[] =['#FFE6E3','#F5C1C1']
  private colorOffreLinkedIn:any[]=['#B1BED7','#E5E9F2','#637CAF','#27344D','#50699B']

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
    this.loadCsvData();
    this.roleConnected = this.tokenStorageService.getUser().role;
  }

  public chart1: any;
  totalJobs: number = 0;
  categories: any = {
    'DWM': 'Développement Web & Mobile',
    'BI&BD': 'Business Intelligence & Big Data',
    'ES': 'Système Embarqué',
    'CL': 'Cloud',
    'AUTRE': 'Autre'
  };
  jobCounts: any = {};


  loadCsvData() {
    this.offreService.parseCsvFileFromUrl('assets/linkedin-jobs-noduplicates.csv').subscribe(
      (data: any[]) => {
        const filteredData = data.slice(1);
        this.totalJobs = filteredData.length;
        filteredData.forEach((item) => {
          const category = this.mapSpecialityToCategory(item.Speciality);
          if (category) {
            if (!this.jobCounts[category]) {
              this.jobCounts[category] = 0;
            }
            this.jobCounts[category]++;
          }
        });

        this.updateChart1();
      }
    );
  }

  mapSpecialityToCategory(speciality: string) {
    if (speciality) {
      return this.categories[speciality.trim()];
    }
    return 'Inconnu';
  }

  updateChart1() {
    const labeldata: string[] = [];
    const realdata: number[] = [];
    for (const category of Object.keys(this.jobCounts)) {
      const count = this.jobCounts[category];
      labeldata.push(category);
      realdata.push((count / this.totalJobs) * 100);
    }

    this.createChart1(labeldata, realdata, this.colorOffreLinkedIn);
  }


  createChart1(labeldata: string[], realdata: number[], colorOffreLinkedIn: string[]) {
    const unknownIndex = labeldata.indexOf('Inconnu');
    if (unknownIndex !== -1) {
      labeldata.splice(unknownIndex, 1);
      realdata.splice(unknownIndex, 1);
    }
    this.chart1 = new Chart('MyChart1', {
      type: 'bar',
      data: {
        labels: labeldata,
        datasets: [{
          label: '',
          data: realdata,
          backgroundColor: colorOffreLinkedIn,
          borderColor: colorOffreLinkedIn,
          hoverBackgroundColor: colorOffreLinkedIn,
          hoverBorderColor: colorOffreLinkedIn,
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        plugins: {
          title: {
            display: true,
            text: 'Live pourcentage des emplois de titre "Software Engineer" par catégorie selon LinkedIn',
            color:'#1a2232'
          }
        }
      }
    });
    const legendItems = this.chart1.legend.legendItems;
    legendItems.forEach((item: { fillStyle: string; strokeStyle: string; }) => {
      item.fillStyle = 'rgba(0, 0, 0, 0)';
      item.strokeStyle = 'rgba(0, 0, 0, 0)';
    });
  }


}
