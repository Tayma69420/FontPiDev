import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addsession',
  templateUrl: './addsession.component.html',
  styleUrls: ['./addsession.component.css']
})
export class AddsessionComponent implements OnInit {
  constructor(
    private service : SessionService,
    private router : Router

  ) { }
  packs = ['visioconference', 'interactif', 'branding', 'animation', 'documentation'];

  fournisseur:any={dateSession: null}

  ngOnInit(): void {


  }

  ajouter(): void {
    this.service.addSession(this.fournisseur).subscribe(
      (session: any) => {
        this.assignMaterial(session.idSession, this.fournisseur.pack);
        this.navigate();
      }
    );
  }
  navigate(){
    this.router.navigate(['sessiona'])
  }

  assignMaterial(idSession: number, pack: string) {
    this.service.assignMaterialToSession(idSession, pack).subscribe(response => {
      console.log(response);
    });
  }

}

