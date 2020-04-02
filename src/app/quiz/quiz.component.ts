import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizzesComponent} from '../quizzes/quizzes.component';
import {QuizServiceClient} from '../services/quiz.service.client';
import {QuestionServiceClient} from '../services/question.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions = []
  quizId = ''
  quizCurrent = []
  constructor(private route: ActivatedRoute,
              private quiz: QuizServiceClient,
              private question: QuestionServiceClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.qid;
      this.question.findAllQuestions(this.quizId)
        .then(questions => this.questions = questions);
      this.quiz.findAllQuizzes()
        .then(quizzes => this.quizCurrent = quizzes);
    });

  }

}
