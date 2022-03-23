import { Component, OnInit } from '@angular/core';
import { TopicItem } from '../model/topic-item';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-topics-home',
  templateUrl: './topics-home.component.html',
  styleUrls: ['./topics-home.component.css']
})
export class TopicsHomeComponent implements OnInit {

  public topics : TopicItem[] = [];

  constructor(private topicsService: TopicsService) { }

  ngOnInit(): void {
    this.topicsService
      .getTopicItems()
      .subscribe(items => this.topics = items);
  }
}
