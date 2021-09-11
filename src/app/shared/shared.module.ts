import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { CategoryComponent } from './category/category.component';
import { CategoryStatisticsComponent } from './category-statistics/category-statistics.component';
import { PostStatisticsComponent } from './post-statistics/post-statistics.component';
import { RouterModule } from '@angular/router';
import { TimeAgoPipe } from 'time-ago-pipe';
import { TimeAgoPipePipe } from './pipes/time-ago.pipe';
import { DateToStringPipe } from './pipes/date-to-string.pipe';



@NgModule({
  declarations: [
    CategoryComponent,
    CategoryStatisticsComponent,
    PostStatisticsComponent,
    TimeAgoPipePipe,
    DateToStringPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
  ],
  exports: [CommonModule, MaterialModule, FormsModule, CategoryComponent, CategoryStatisticsComponent,PostStatisticsComponent, TimeAgoPipePipe, DateToStringPipe]
})
export class SharedModule { }
