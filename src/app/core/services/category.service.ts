import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:5000/api/';

  private selectedCategoryIdSubject$ = new BehaviorSubject('00000000-0000-0000-0000-000000000000');
  selectedCategoryIdObservable$: Observable<string> = this.selectedCategoryIdSubject$.asObservable();

  constructor(private http: HttpClient) { }


  getCategories() {
    return this.http.get<Category[]>(this.baseUrl + 'posts/' + 'category');
  }

  selectedCatgoryChanged(id: string) {
    this.selectedCategoryIdSubject$.next(id);
  }

}
