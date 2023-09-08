import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonlistComponent } from 'src/app/components/lessonlist/lessonlist.component';
import { LessonService } from 'src/app/services/lessonservice.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
})
export class LessonComponent implements OnInit {
  lessonTitle = '';
  slides: any[] = [];
  currentSlideIndex = 0;
  lessons: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private lessonService: LessonService
  ) {
    this.slides = [
      { title: 'Slide 1' },
      { title: 'Slide 2' },
      { title: 'Slide 3' },
      { title: 'Slide 4' },
    ];
  }

  showBegginer = false;

  toggleBegginer() {
    this.showBegginer = !this.showBegginer;
  }

  ngOnInit() {
    const urlSegments = this.route.snapshot.url;
    this.lessonTitle = urlSegments[urlSegments.length - 1].path;

    this.lessons = this.lessonService.getLessons();

    switch (this.lessonTitle) {
      case 'Animals':
        this.slides = [
          { native: 'Lion', translation: 'Leu' },
          { native: 'Dog', translation: 'Câine' },
          { native: 'Elephant', translation: 'Elefant' },
          { native: 'Pig', translation: 'Porc' },
        ];
        break;
      case 'Colors':
        this.slides = [
          { native: 'Red', translation: 'Roșu' },
          { native: 'Blue', translation: 'Albastru' },
          { native: 'Green', translation: 'Verde' },
          { native: 'Yellow', translation: 'Galben' },
        ];
        break;
      case 'Numbers':
        this.slides = [
          { native: 'Zero', translation: 'Zero' },
          { native: 'One', translation: 'Unu' },
          { native: 'Two', translation: 'Doi' },
          { native: 'Three', translation: 'Trei' },
          { native: 'Four', translation: 'Patru' },
          { native: 'Five', translation: 'Cinci' },
          { native: 'Six', translation: 'Șase' },
          { native: 'Seven', translation: 'Șapte' },
          { native: 'Eight', translation: 'Opt' },
          { native: 'Nine', translation: 'Nouă' },
          { native: 'Ten', translation: 'Zece' },
        ];
        break;
      case 'People':
        this.slides = [
          {
            native: 'Mom',
            translation: 'Mamă',
          },
          {
            native: 'Dad',
            translation: 'Tată',
          },
          {
            native: 'Sister',
            translation: 'Soră',
          },
          {
            native: 'Brother',
            translation: 'Frate',
          },
        ];
        break;
    }
  }
}
