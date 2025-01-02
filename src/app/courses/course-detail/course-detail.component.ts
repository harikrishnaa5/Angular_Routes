import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  selectedCourse: Course;
  courseId: number;
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  courseService: CourseService = inject(CourseService);
  paramMapObs;

  ngOnInit() {
    // this.courseId = this.activeRoute.snapshot.params['id'] // returns the value of current id route parameter
    // this.courseId = +this.activeRoute.snapshot.paramMap.get('id')
    this.paramMapObs = this.activeRoute.paramMap.subscribe((data) => {
      this.courseId = +data.get('id')
      this.selectedCourse = this.courseService.courses.find(
        (course) => course.id === this.courseId
      );
    });
  }

  ngOnDestroy(): void {
    this.paramMapObs.unsubscribe()
  }
}
