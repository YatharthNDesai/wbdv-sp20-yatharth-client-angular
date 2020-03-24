import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findCourseById = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001377543/courses/${courseId}`)
      .then(response => response.json())

  findAllCourses = () =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/001377543/courses')
      .then(response => response.json())

  findModuleForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001377543/courses/${courseId}/modules`)
      .then(response => response.json())

  findTopicsForLesson = (lessonId) =>
    fetch(`https://secret-beach-98864.herokuapp.com/api/lessons/${lessonId}/topics`)
      .then(response => response.json())

}
