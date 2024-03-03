import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StorageService} from "../services/storage.service"; // Adjust the path based on your actual structure
import { UserRole} from "../models/roles.enum"; // Adjust the path based on your actual structure

@Injectable({
  providedIn: 'root',
})
export class ExposantGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.storageService.getUser().role === UserRole.Exposant) {
      return true;
    } else {
      this.router.navigate(['/access-denied']);
      return false;
    }
  }
}
