import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }


  @Input()
  question = {_id: '', title: '', quizId: '', question:
      '', correct: '', type:
      '', choices: []};
  grading = false
  @Input()
  answer = null
  @Output()
  answerChange = new EventEmitter<string>()
  submitAnswer = () =>
    this.answerChange.emit(this.answer)

  // // @ts-ignore
  // options = this.question.choices
  grade = () => this.grading = true
  ngOnInit(): void {
  }

}
