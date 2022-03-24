import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicPageComponent } from './topic-page/topic-page.component';
import { TopicsHomeComponent as TopicsHomeComponent } from './topics-home/topics-home.component';
import { TopicsPageComponent } from './topics-page/topics-page.component';

const routes: Routes = [
  {
    path: '',
    component: TopicsPageComponent,
    children: [
      {
        path: '', component: TopicsHomeComponent
      },
      {
        path: ':topicId',
        component: TopicPageComponent
      }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class TopicsRoutingModule { }
