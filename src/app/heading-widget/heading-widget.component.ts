import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heading-widget',
  templateUrl: './heading-widget.component.html',
  styleUrls: ['./heading-widget.component.css']
})
export class HeadingWidgetComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  headingWidgets = []
  courseId = ''
  moduleId = ''
  lessonId = ''
  topicId = ''
  widgetId = ''

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      this.topicId = params.topicId;
      this.widgetId = params.widgetId;
      fetch(`https://secret-beach-98864.herokuapp.com/api/topics/${this.topicId}/widgets`)
        .then(response => response.json())
        .then(widgets => this.headingWidgets = widgets);
    });
  }

}
