import { Component, OnInit } from '@angular/core';
import { PostStatisticsService } from 'src/app/core/services/post-statistics.service';
import { PostStatistics } from '../models/PostStatistics';

@Component({
  selector: 'app-post-statistics',
  templateUrl: './post-statistics.component.html',
  styleUrls: ['./post-statistics.component.css']
})
export class PostStatisticsComponent implements OnInit {

  postStats: PostStatistics[] = [];
  constructor(private postStatisticsSerice: PostStatisticsService) { }

  ngOnInit(): void {
    this.getPostStatistics();
  }

  getPostStatistics() {
    this.postStatisticsSerice.getPostStats().subscribe(postStats => {
      this.postStats = postStats;
    }, error => {
      console.log(error);
    });
  }

}
