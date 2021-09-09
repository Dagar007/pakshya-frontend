import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { Category } from '../models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCatgories();
  }

  catgorySelected(id: string) {
   
  }

  getCatgories() {
    this.categoryService.getCategories().subscribe(catgories => {
      this.categories = catgories;
    }, err => {
      console.log(err);
    })
  }

}
