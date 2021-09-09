import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { CategoryComponent } from './category/category.component';
import { CategoryStatisticsComponent } from './category-statistics/category-statistics.component';
import { PostStatisticsComponent } from './post-statistics/post-statistics.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoryComponent,
    CategoryStatisticsComponent,
    PostStatisticsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  exports: [CommonModule, MaterialModule, FormsModule, CategoryComponent, CategoryStatisticsComponent,PostStatisticsComponent]
})
export class SharedModule { }
