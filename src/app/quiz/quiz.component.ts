import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions = []
  quizId = ''
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.qid;
      fetch(`http://localhost:3000/api/quizzes/${this.quizId}/questions`)
        .then(response => response.json())
        .then(questions => this.questions = questions)
        .then(() => console.log(this.questions));
    });

  }

}
