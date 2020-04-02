export class QuestionServiceClient {
  findAllQuestions = (quizId) => fetch(`http://localhost:3000/api/quizzes/${quizId}/questions`)
    .then(response => response.json());
}
