import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private readonly api: string;

  constructor(private http: HttpClient) {
    this.api = `${environment.apiUrl}`;
  }

  getPosts(): Observable<Post> {
    return this.http.get<Post>(this.api);
  }
}
