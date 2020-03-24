import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: CourseServiceClient) { }
  topics = [
    {id: '123', title: 'topic 1'},
    {id: '234', title: 'topic 2'},
    {id: '345', title: 'topic 3'}
  ]
  courseId = ''
  moduleId = ''
  lessonId = ''
  topicId = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      this.topicId = params.topicId;
      this.service
        .findTopicsForLesson(this.lessonId)
        .then(topics => this.topics = topics);
    });
  }

}
