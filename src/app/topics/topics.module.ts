import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsHomeComponent } from './topics-home/topics-home.component';
import { TopicsRoutingModule } from './topics-routing.module';
import { TopicItemComponent } from './topic-item/topic-item.component';
import { TopicPageComponent } from './topic-page/topic-page.component';
import { TopicsPageComponent } from './topics-page/topics-page.component';



@NgModule({
  declarations: [
    TopicsHomeComponent,
    TopicItemComponent,
    TopicPageComponent,
    TopicsPageComponent
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule
  ],
  exports: [
    TopicsHomeComponent
  ]
})
export class TopicsModule { }
