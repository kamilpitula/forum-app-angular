import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {

  @Output()
  topicId$!: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.topicId$ = this.activatedRoute
    .paramMap
    .pipe(
      switchMap((params: ParamMap) =>
         params.get('topicId')! 
      )
    )
  }

}
