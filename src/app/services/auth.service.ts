import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../environments/environment.prod';
import { JwtResponse } from '../models/jwt-response';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // AUTH_SERVER: string = 'http://localhost:3000';
  private AUTH_SERVER: string;
  authSubject = new BehaviorSubject(false);
  private token: string;

  constructor(private http: HttpClient) {
    this.AUTH_SERVER = `${environment.authServer}`;
  }

  register(user: User): Observable<JwtResponse> {
    return this.http
      .post<JwtResponse>(`${this.AUTH_SERVER}/register`, user)
      .pipe(
        tap((res: JwtResponse) => {
          if (res) {
            this.saveToken(res.dataUser.accsessToken, res.dataUser.expiresIn);
          }
        })
      );
  }

  login(user: User): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.AUTH_SERVER}/login`, user).pipe(
      tap((res: JwtResponse) => {
        if (res) {
          this.saveToken(res.dataUser.accsessToken, res.dataUser.expiresIn);
        }
      })
    );
  }

  // logout(): void {
  //   this.token = '';
  //   localStorage.removeItem('ACCESS_TOKEN');
  //   localStorage.removeItem('EXPIRES_IN');
  // }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('EXPIRES_IN', expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('ACCESS_TOKEN');
    }
    return this.token;
  }
}
