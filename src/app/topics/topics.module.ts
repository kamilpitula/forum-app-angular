import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsPageComponent } from './topics-page/topics-page.component';
import { TopicsRoutingModule } from './topics-routing.module';
import { TopicItemComponent } from './topic-item/topic-item.component';



@NgModule({
  declarations: [
    TopicsPageComponent,
    TopicItemComponent
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule
  ],
  exports: [
    TopicsPageComponent
  ]
})
export class TopicsModule { }
