import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicsPageComponent } from './topics-page/topics-page.component';

const routes: Routes = [
  {
    path: '', component: TopicsPageComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class TopicsRoutingModule { }
