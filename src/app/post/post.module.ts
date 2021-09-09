import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PostRoutingModule } from './post-routing.module';


@NgModule({
  declarations: [PostRoutingModule.components],
  imports: [ PostRoutingModule, SharedModule ]
})
export class PostModule { }
