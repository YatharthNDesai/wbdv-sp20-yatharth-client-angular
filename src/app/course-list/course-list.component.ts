import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  newCourseTitle = ''
  currentDate = new Date().getHours()
  courses = [
    {id: '123', title: 'Course A'},
    {id: '234', title: 'Course B'},
    {id: '345', title: 'Course C'},
    {id: '456', title: 'Course D'}
  ]

  deleteCourse = (deletedCourse) =>
    this.courses = this.courses.filter(course => course !== deletedCourse)
  createCourse = (title) => {
    console.log(title)
    this.courses.push({id: '321', title})}

  ngOnInit(): void {
    this.service.findAllCourses()
      .then(courses => this.courses = courses)

  }

}
