import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  selectedCourse: Course;
  courseId: number;
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  courseService: CourseService = inject(CourseService)

  ngOnInit() {
    // this.courseId = this.activeRoute.snapshot.params['id'] // returns the value of current id route parameter
    this.courseId = +this.activeRoute.snapshot.paramMap.get('id')
    this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId)
  }


}
