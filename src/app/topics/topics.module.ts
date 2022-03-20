import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsPageComponent } from './topics-page/topics-page.component';
import { TopicsRoutingModule } from './topics-routing.module';
import { TopicItemComponent } from './topic-item/topic-item.component';
import { TopicPageComponent } from './topic-page/topic-page.component';



@NgModule({
  declarations: [
    TopicsPageComponent,
    TopicItemComponent,
    TopicPageComponent
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
