import { Component, Input, OnInit } from '@angular/core';
import { TopicItem } from '../model/topic-item';

@Component({
  selector: 'app-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.css']
})
export class TopicItemComponent {

  @Input()
  topicData!: TopicItem;

  constructor() { }
}
