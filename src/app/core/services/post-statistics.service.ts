import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryStatistics } from 'src/app/shared/models/CategoryStatistics';
import { PostStatistics } from 'src/app/shared/models/PostStatistics';

@Injectable({
  providedIn: 'root'
})
export class PostStatisticsService {

  private baseUrl = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { }

  getPostStats() {
    return this.http.get<PostStatistics[]>(this.baseUrl + 'posts/stats');
  }
  getCategoryStats() {
    return this.http.get<CategoryStatistics[]>(this.baseUrl + 'posts/category/stats');
  }
}
