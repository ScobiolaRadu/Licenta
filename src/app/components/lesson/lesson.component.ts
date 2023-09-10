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
  slides2: any[] = [];
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
    this.slides2 = [];

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
            { native: 'Eleven', translation: 'Eleven' },
            { native: 'Twelve', translation: 'Twelve' },
            { native: 'Thirteen', translation: 'Thirteen' },
            { native: 'Fourteen', translation: 'Fourteen' },
            { native: 'Fifteen', translation: 'Fifteen' },
            { native: 'Sixteen', translation: 'Sixteen' },
            { native: 'Seventeen', translation: 'Seventeen' },
            { native: 'Eighteen', translation: 'Eighteen' },
            { native: 'Nineteen', translation: 'Nineteen' },
            { native: 'Twenty', translation: 'Twenty' },
            { native: 'Twenty-one', translation: 'Twenty-one' },
            { native: 'Thirty', translation: 'Thirty' },
            { native: 'Thirty-one', translation: 'Thirty-one' },
            { native: 'Forty', translation: 'Forty' },
            { native: 'Forty-one', translation: 'Forty-one' },
            { native: 'Fifty', translation: 'Fifty' },
            { native: 'Fifty-one', translation: 'Fifty-one' },
            { native: 'Sixty', translation: 'Sixty' },
            { native: 'Sixty-one', translation: 'Sixty-one' },
            { native: 'Seventy', translation: 'Seventy' },
            { native: 'Seventy-one', translation: 'Seventy-one' },
            { native: 'Eighty', translation: 'Eighty' },
            { native: 'Eighty-one', translation: 'Eighty-one' },
            { native: 'Ninety', translation: 'Ninety' },
            { native: 'Ninety-one', translation: 'Ninety-one' },
            { native: 'One hundred', translation: 'One hundred' },
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
            { native: 'Eleven', translation: 'Onze' },
            { native: 'Twelve', translation: 'Douze' },
            { native: 'Thirteen', translation: 'Treize' },
            { native: 'Fourteen', translation: 'Quatorze' },
            { native: 'Fifteen', translation: 'Quinze' },
            { native: 'Sixteen', translation: 'Seize' },
            { native: 'Seventeen', translation: 'Dix-sept' },
            { native: 'Eighteen', translation: 'Dix-huit' },
            { native: 'Nineteen', translation: 'Dix-neuf' },
            { native: 'Twenty', translation: 'Vingt' },
            { native: 'Twenty-one', translation: 'Vingt et un' },
            { native: 'Thirty', translation: 'Trente' },
            { native: 'Thirty-one', translation: 'Trente et un' },
            { native: 'Forty', translation: 'Quarante' },
            { native: 'Forty-one', translation: 'Quarante et un' },
            { native: 'Fifty', translation: 'Cinquante' },
            { native: 'Fifty-one', translation: 'Cinquante et un' },
            { native: 'Sixty', translation: 'Soixante' },
            { native: 'Sixty-one', translation: 'Soixante et un' },
            { native: 'Seventy', translation: 'Soixante-dix' },
            { native: 'Seventy-one', translation: 'Soixante et onze' },
            { native: 'Eighty', translation: 'Quatre-vingts' },
            { native: 'Eighty-one', translation: 'Quatre-vingt-un' },
            { native: 'Ninety', translation: 'Quatre-vingt-dix' },
            { native: 'Ninety-one', translation: 'Quatre-vingt-onze' },
            { native: 'One hundred', translation: 'Cent' },
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
            { native: 'Eleven', translation: 'Unsprezece' },
            { native: 'Twelve', translation: 'Doisprezece' },
            { native: 'Thirteen', translation: 'Treisprezece' },
            { native: 'Fourteen', translation: 'Paisprezece' },
            { native: 'Fifteen', translation: 'Cincisprezece' },
            { native: 'Sixteen', translation: 'Șaisprezece' },
            { native: 'Seventeen', translation: 'Șaptesprezece' },
            { native: 'Eighteen', translation: 'Optisprezece' },
            { native: 'Nineteen', translation: 'Nouăsprezece' },
            { native: 'Twenty', translation: 'Douăzeci' },
            { native: 'Twenty-one', translation: 'Douăzeci și unu' },
            { native: 'Thirty', translation: 'Treizeci' },
            { native: 'Thirty-one', translation: 'Treizeci și unu' },
            { native: 'Forty', translation: 'Patruzeci' },
            { native: 'Forty-one', translation: 'Patruzeci și unu' },
            { native: 'Fifty', translation: 'Cincizeci' },
            { native: 'Fifty-one', translation: 'Cincizeci și unu' },
            { native: 'Sixty', translation: 'Șaizeci' },
            { native: 'Sixty-one', translation: 'Șaizeci și unu' },
            { native: 'Seventy', translation: 'Șaptezeci' },
            { native: 'Seventy-one', translation: 'Șaptezeci și unu' },
            { native: 'Eighty', translation: 'Optzeci' },
            { native: 'Eighty-one', translation: 'Optzeci și unu' },
            { native: 'Ninety', translation: 'Nouăzeci' },
            { native: 'Ninety-one', translation: 'Nouăzeci și unu' },
            { native: 'One hundred', translation: 'O sută' },
          ];
        break;
      case 'People':
        if (this.languageToLearn === 'en') {
          this.slides = [
            {
              native: 'I',
              translation: 'I',
            },
            {
              native: 'You',
              translation: 'You',
            },
            {
              native: 'He',
              translation: 'He',
            },
            {
              native: 'She',
              translation: 'She',
            },
            {
              native: 'We',
              translation: 'We',
            },
            {
              native: 'You (plural)',
              translation: 'You (plural)',
            },
            {
              native: 'They',
              translation: 'They',
            },
          ];
          this.slides2 = [
            {
              native: 'Mother',
              translation: 'Mother',
            },
            {
              native: 'Father',
              translation: 'Father',
            },
            {
              native: 'Sister',
              translation: 'Sister',
            },
            {
              native: 'Brother',
              translation: 'Brother',
            },
            {
              native: 'Son',
              translation: 'Son',
            },
            {
              native: 'Daughter',
              translation: 'Daughter',
            },
            {
              native: 'Grandmother',
              translation: 'Grandmother',
            },
            {
              native: 'Grandfather',
              translation: 'Grandfather',
            },
            {
              native: 'Grandson',
              translation: 'Grandson',
            },
            {
              native: 'Granddaughter',
              translation: 'Granddaughter',
            },
            {
              native: 'Aunt',
              translation: 'Aunt',
            },
            {
              native: 'Uncle',
              translation: 'Uncle',
            },
          ];
        } else if (this.languageToLearn === 'fr') {
          this.slides = [
            {
              native: 'I',
              translation: 'Je',
            },
            {
              native: 'You',
              translation: 'Tu',
            },
            {
              native: 'He',
              translation: 'Il',
            },
            {
              native: 'She',
              translation: 'Elle',
            },
            {
              native: 'We',
              translation: 'Nous',
            },
            {
              native: 'You (plural)',
              translation: 'Vous',
            },
            {
              native: 'They',
              translation: 'Ils/Elles',
            },
          ];
          this.slides2 = [
            {
              native: 'Mother',
              translation: 'Mère',
            },
            {
              native: 'Father',
              translation: 'Père',
            },
            {
              native: 'Sister',
              translation: 'Sœur',
            },
            {
              native: 'Brother',
              translation: 'Frère',
            },
            {
              native: 'Son',
              translation: 'Fils',
            },
            {
              native: 'Daughter',
              translation: 'Fille',
            },
            {
              native: 'Grandmother',
              translation: 'Grand-mère',
            },
            {
              native: 'Grandfather',
              translation: 'Grand-père',
            },
            {
              native: 'Grandson',
              translation: 'Petit-fils',
            },
            {
              native: 'Granddaughter',
              translation: 'Petite-fille',
            },
            {
              native: 'Aunt',
              translation: 'Tante',
            },
            {
              native: 'Uncle',
              translation: 'Oncle',
            },
          ];
        } else if (this.languageToLearn === 'ro') {
          this.slides = [
            {
              native: 'I',
              translation: 'Eu',
            },
            {
              native: 'You',
              translation: 'Tu',
            },
            {
              native: 'He',
              translation: 'El',
            },
            {
              native: 'She',
              translation: 'Ea',
            },
            {
              native: 'We',
              translation: 'Noi',
            },
            {
              native: 'You (plural)',
              translation: 'Voi',
            },
            {
              native: 'They',
              translation: 'Ei/Ele',
            },
          ];
          this.slides2 = [
            {
              native: 'Mother',
              translation: 'Mamă',
            },
            {
              native: 'Father',
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
            {
              native: 'Son',
              translation: 'Fiu',
            },
            {
              native: 'Daughter',
              translation: 'Fiică',
            },
            {
              native: 'Grandmother',
              translation: 'Bunică',
            },
            {
              native: 'Grandfather',
              translation: 'Bunic',
            },
            {
              native: 'Grandson',
              translation: 'Nepot',
            },
            {
              native: 'Granddaughter',
              translation: 'Nepoată',
            },
            {
              native: 'Aunt',
              translation: 'Mătușă',
            },
            {
              native: 'Uncle',
              translation: 'Unchi',
            },
          ];
        }
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
