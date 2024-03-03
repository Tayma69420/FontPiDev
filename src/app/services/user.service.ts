import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

const AUTH_API = 'http://localhost:8075/api/v1/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private storageService: StorageService) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'authenticate',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string, tel: string, image: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
        tel,
        image,
      },
      httpOptions
    );
  }


  handleLoginResponse(response: any): void {
    if (response.token) {

      document.cookie = `teymour=${response.token}; path=/; HttpOnly; Secure`;

      this.storageService.saveUser(response.user);
    }
  }

  // Handle logout
  logout(): void {

    document.cookie = 'teymour=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure';

    this.storageService.clean();
  }
}
