export class QuestionServiceClient {
  findAllQuestions = (quizId) => fetch(`https://apricot-cobbler-36114.herokuapp.com/api/quizzes/${quizId}/questions`)
    .then(response => response.json());
}
