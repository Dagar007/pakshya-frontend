import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../shared/models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { }

  getPosts(category: string) {
    return this.http.get<Post[]>(this.baseUrl + 'posts?pageSize=6&category='+category);
  }
}
