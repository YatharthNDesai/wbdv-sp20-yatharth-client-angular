import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quizzes = []
  courseId = ''
  constructor(private route: ActivatedRoute,
              private quiz: QuizServiceClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.quiz.findAllQuizzes()
        .then(quizzes => this.quizzes = quizzes);
    });

  }

}
