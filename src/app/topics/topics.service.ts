import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TopicItem } from './model/topic-item';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  fakeItems : TopicItem[] = [
    {topicId: 1, title: 'First topic.', contentTeaser: 'You can see whole content since it is shorter than n characters'},
    {topicId: 2, title: 'Second topic', contentTeaser: 'This one is a little bit longer, but it fits in three lines. Content of this length also are supposed to be seen as a whole.'}
  ]
  constructor() { }

  getTopicItems() : Observable<TopicItem[]> {
    return of(this.fakeItems);
  }
}
