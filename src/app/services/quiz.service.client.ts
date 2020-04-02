import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () => fetch('https://apricot-cobbler-36114.herokuapp.com/api/quizzes')
    .then(response => response.json());
}
