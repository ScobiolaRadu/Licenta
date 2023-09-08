import { Component } from '@angular/core';
import { Lesson, LessonService } from 'src/app/services/lessonservice.service';

@Component({
  selector: 'app-lessonlist',
  templateUrl: './lessonlist.component.html',
  styleUrls: ['./lessonlist.component.css'],
})
export class LessonlistComponent {
  lessons: Lesson[] = [];
  constructor(private lessonService: LessonService) {
    this.lessons = lessonService.getLessons();
  }

  showBegginer = false;

  toggleBegginer() {
    this.showBegginer = !this.showBegginer;
  }
}
