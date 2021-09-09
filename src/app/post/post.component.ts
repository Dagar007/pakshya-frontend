import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/models/Post';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postServce: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts() {
    this.postServce.getPosts().subscribe(posts => {
      this.posts = posts;
    }, error => {
      console.log(error)
    });
  }

}
