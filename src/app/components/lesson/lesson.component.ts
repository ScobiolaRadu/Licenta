import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonlistComponent } from 'src/app/components/lessonlist/lessonlist.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LessonService } from 'src/app/services/lessonservice.service';
import { StorageService } from 'src/app/services/storageservice.service';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
})
export class LessonComponent implements OnInit {
  lessonTitle = '';
  slides: any[] = [];
  currentSlideIndex = 0;
  lessonsBegginer: any[] = [];
  lessonsIntermediate: any[] = [];
  lessonsAdvanced: any[] = [];
  languageToLearn: string = '';

  constructor(
    private route: ActivatedRoute,
    private lessonService: LessonService,
    private translationService: TranslationService,
    private storageService: StorageService,
    private authService: AuthenticationService
  ) {
    this.slides = [
      { title: 'Slide 1' },
      { title: 'Slide 2' },
      { title: 'Slide 3' },
      { title: 'Slide 4' },
    ];

    authService.currentUser$.subscribe((user) => {
      if (user) {
        storageService
          .getUserLanguageToLearnByEmail(
            this.authService.getCurrentUser()?.email || ''
          )
          .subscribe((languageToLearn) => {
            this.languageToLearn = languageToLearn || '';
            this.initSlides();
          });
      }
    });
  }

  private initSlides() {
    switch (this.lessonTitle) {
      case 'Colors':
        this.slides = [
          { native: 'Red', translation: 'Roșu' },
          { native: 'Blue', translation: 'Albastru' },
          { native: 'Green', translation: 'Verde' },
          { native: 'Yellow', translation: 'Galben' },
        ];
        break;
      case 'Numbers':
        if (this.languageToLearn === 'en')
          this.slides = [
            { native: 'Zero', translation: 'Zero' },
            { native: 'One', translation: 'One' },
            { native: 'Two', translation: 'Two' },
            { native: 'Three', translation: 'Three' },
            { native: 'Four', translation: 'Four' },
            { native: 'Five', translation: 'Five' },
            { native: 'Six', translation: 'Six' },
            { native: 'Seven', translation: 'Seven' },
            { native: 'Eight', translation: 'Eight' },
            { native: 'Nine', translation: 'Nine' },
            { native: 'Ten', translation: 'Ten' },
          ];
        else if (this.languageToLearn === 'fr')
          this.slides = [
            { native: 'Zero', translation: 'Zéro' },
            { native: 'One', translation: 'Un' },
            { native: 'Two', translation: 'Deux' },
            { native: 'Three', translation: 'Trois' },
            { native: 'Four', translation: 'Quatre' },
            { native: 'Five', translation: 'Cinq' },
            { native: 'Six', translation: 'Six' },
            { native: 'Seven', translation: 'Sept' },
            { native: 'Eight', translation: 'Huit' },
            { native: 'Nine', translation: 'Neuf' },
            { native: 'Ten', translation: 'Dix' },
          ];
        else if (this.languageToLearn === 'ro')
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

  ngOnInit() {
    const urlSegments = this.route.snapshot.url;
    this.lessonTitle = urlSegments[urlSegments.length - 1].path;

    this.lessonsBegginer = this.lessonService.getLessonsBegginer();
    this.lessonsIntermediate = this.lessonService.getLessonsIntermediate();
    this.lessonsAdvanced = this.lessonService.getLessonsAdvanced();
  }
}
