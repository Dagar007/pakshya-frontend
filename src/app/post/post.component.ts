import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../core/services/category.service';
import { Post } from '../shared/models/Post';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postServce: PostService, private categoryService: CategoryService) { }

  selectedCategory$: Observable<string> | undefined;
  ngOnInit(): void {
    this.categoryService.selectedCategoryIdObservable$.subscribe(category => {
      console.log(category);
      this.getPosts(category);
    });
    
  }

  private getPosts(category: string) {
    this.postServce.getPosts(category).subscribe(posts => {
      this.posts = posts;
    }, error => {
      console.log(error)
    });
  }

}
