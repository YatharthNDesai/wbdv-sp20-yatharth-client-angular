import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {


  @Input()
  question = {_id: '', title: '', quizId: '', question:
      '', correct: '', type:
      '', choices: []};
  @Input()
  answer = null
  @Output()
  answerChange = new EventEmitter<string>()
  grading = false
  submitAnswer = () =>
    this.answerChange.emit(this.answer)
  grade = () => {this.grading = true}

  constructor() { }
  ngOnInit(): void {
  }

}
