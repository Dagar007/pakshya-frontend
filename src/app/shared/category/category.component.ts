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
    this.getCategories();
  }

  categorySelected(id: string) {
    this.categoryService.selectedCatgoryChanged(id);
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(catgories => {
      this.categories = catgories;
    }, err => {
      console.log(err);
    })
  }

}
