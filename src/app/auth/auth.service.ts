import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
   return this.http.post<AuthResponseData>(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
    AIzaSyAQo0a4q1wkYCgYJeW81isDJ9JRUYm7Ib0',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }
}
