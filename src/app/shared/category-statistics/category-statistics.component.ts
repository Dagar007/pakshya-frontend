import { Component, OnInit } from '@angular/core';
import { PostStatisticsService } from 'src/app/core/services/post-statistics.service';
import { CategoryStatistics } from '../models/CategoryStatistics';

@Component({
  selector: 'app-category-statistics',
  templateUrl: './category-statistics.component.html',
  styleUrls: ['./category-statistics.component.css']
})
export class CategoryStatisticsComponent implements OnInit {

  categoryStats: CategoryStatistics[] = [];
  constructor(private postStatisticsSerice: PostStatisticsService) { }

  ngOnInit(): void {
  }

  getCategoryStatistics() {
    this.postStatisticsSerice.getCategoryStats().subscribe(categoryStats => {
      this.categoryStats = categoryStats;
    }, error => {
      console.log(error);
    });
  }

}
