import { Component, OnInit } from '@angular/core';
import { TopicItem } from '../model/topic-item';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.component.html',
  styleUrls: ['./topics-page.component.css']
})
export class TopicsPageComponent implements OnInit {

  public topics : TopicItem[] = [];

  constructor(private topicsService: TopicsService) { }

  ngOnInit(): void {
    this.topicsService
      .getTopicItems()
      .subscribe(items => this.topics = items);
  }
}
