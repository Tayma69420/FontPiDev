import {Component, OnInit} from '@angular/core';
import {StorageService} from "../services/storage.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  roleConnected:any;
  ngOnInit(): void {
    this.roleConnected = this.tokenStorageService.getUser().role;
  }
  constructor(private tokenStorageService:StorageService) {
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
