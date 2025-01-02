import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  coursesService = inject(CourseService);
  AllCourses: Course[];
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  searchString: string;

  ngOnInit() {
    this.activeRoute.queryParamMap.subscribe((data) => {
      console.log('Query param updated:', data.get('search'));
      this.searchString = data.get('search');
      this.updateCourseList();
    });
  }

  updateCourseList() {
    if (!this.searchString) {
      this.AllCourses = this.coursesService.courses;
    } else {
      this.AllCourses = this.coursesService.courses.filter((course) =>
        course.title.toLowerCase().includes(this.searchString.toLowerCase())
      );
    }
  }
}
