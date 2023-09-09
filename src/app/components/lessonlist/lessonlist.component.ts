import { Component } from '@angular/core';
import { Lesson, LessonService } from 'src/app/services/lessonservice.service';

@Component({
  selector: 'app-lessonlist',
  templateUrl: './lessonlist.component.html',
  styleUrls: ['./lessonlist.component.css'],
})
export class LessonlistComponent {
  lessonsBegginer: Lesson[] = [];
  lessonsIntermediate: Lesson[] = [];
  lessonsAdvanced: Lesson[] = [];
  constructor(private lessonService: LessonService) {
    this.lessonsBegginer = lessonService.getLessonsBegginer();
    this.lessonsIntermediate = lessonService.getLessonsIntermediate();
    this.lessonsAdvanced = lessonService.getLessonsAdvanced();
  }

  showBegginer = false;
  toggleBegginer() {
    this.showBegginer = !this.showBegginer;
  }

  showIntermediate = false;
  toggleIntermediate() {
    this.showIntermediate = !this.showIntermediate;
  }

  showAdvanced = false;
  toggleAdvanced() {
    this.showAdvanced = !this.showAdvanced;
  }
}
