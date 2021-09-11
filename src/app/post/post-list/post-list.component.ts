import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {

  @Input() posts : Post[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
