import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  lessons = []

  courseId = ''
  moduleId = ''
  lessonId = ''
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      fetch(`https://wbdv-generic-server.herokuapp.com/api/001377543/modules/${this.moduleId}/lessons`)
        .then(response => response.json())
        .then(lessons => this.lessons = lessons);
    });
  }

}
