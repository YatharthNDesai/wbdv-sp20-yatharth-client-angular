import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {HomeComponent} from './home/home.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';


const routes: Routes = [
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  {path: 'courses/:courseId/quizzes/:qid', component: QuizComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'details/:courseId', component: CourseViewerComponent},
  {path: '', component: HomeComponent},
  {path: 'details/courses/:courseId/modules/:moduleId', component: CourseViewerComponent},
  {path: 'details/courses/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponent},
  {path: 'details/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId', component: CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
