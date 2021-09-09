import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';

import { PostComponent } from './post.component';

const routes: Routes = [
  { path: '', component: PostComponent}
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PostRoutingModule { 
  static components = [ PostComponent, PostListComponent ]
}
