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
  slides3: any[] = [];
  slides4: any[] = [];
  slides5: any[] = [];
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
    this.slides3 = [];
    this.slides4 = [];
    this.slides5 = [];

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
      case 'Greetings':
        if (this.languageToLearn === 'en') {
          this.slides = [
            {
              native: 'Hello',
              translation: 'Hello',
            },
            {
              native: 'Hi',
              translation: 'Hi',
            },
            {
              native: 'Good afternoon',
              translation: 'Good afternoon',
            },
            {
              native: 'Good evening',
              translation: 'Good evening',
            },
            {
              native: 'Good morning',
              translation: 'Good morning',
            },
            {
              native: 'Good night',
              translation: 'Good night',
            },
            {
              native: 'Goodbye',
              translation: 'Goodbye',
            },
            {
              native: 'Bye',
              translation: 'Bye',
            },
          ];
        } else if (this.languageToLearn === 'fr') {
          this.slides = [
            {
              native: 'Hello',
              translation: 'Bonjour',
            },
            {
              native: 'Hi',
              translation: 'Salut',
            },
            {
              native: 'Good afternoon',
              translation: 'Bon après-midi',
            },
            {
              native: 'Good evening',
              translation: 'Bonsoir',
            },
            {
              native: 'Good morning',
              translation: 'Bonjour',
            },
            {
              native: 'Good night',
              translation: 'Bonne nuit',
            },
            {
              native: 'Goodbye',
              translation: 'Au revoir',
            },
            {
              native: 'Bye',
              translation: 'Salut',
            },
          ];
        } else if (this.languageToLearn === 'ro') {
          this.slides = [
            {
              native: 'Hello',
              translation: 'Bună',
            },
            {
              native: 'Hi',
              translation: 'Salut',
            },
            {
              native: 'Good afternoon',
              translation: 'Bună ziua',
            },
            {
              native: 'Good evening',
              translation: 'Bună seara',
            },
            {
              native: 'Good morning',
              translation: 'Bună dimineața',
            },
            {
              native: 'Good night',
              translation: 'Noapte bună',
            },
            {
              native: 'Goodbye',
              translation: 'La revedere',
            },
            {
              native: 'Bye',
              translation: 'Pa',
            },
          ];
        }
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
      case 'Common Phrases':
        if (this.languageToLearn === 'en') {
          this.slides = [
            {
              native: 'How are you?',
              translation: 'How are you?',
            },
            {
              native: 'I am fine, thank you.',
              translation: 'I am fine, thank you.',
            },
            {
              native: 'What is your name?',
              translation: 'What is your name?',
            },
            {
              native: 'My name is...',
              translation: 'My name is...',
            },
            {
              native: 'Nice to meet you.',
              translation: 'Nice to meet you.',
            },
            {
              native: 'Where are you from?',
              translation: 'Where are you from?',
            },
            {
              native: 'I am from...',
              translation: 'I am from...',
            },
            {
              native: 'How old are you?',
              translation: 'How old are you?',
            },
            {
              native: 'I am ... years old.',
              translation: 'I am ... years old.',
            },
            {
              native: "I don't understand.",
              translation: "I don't understand.",
            },
            {
              native: 'Please',
              translation: 'Please',
            },
            {
              native: 'Thank you',
              translation: 'Thank you',
            },
          ];
        } else if (this.languageToLearn === 'fr') {
          this.slides = [
            {
              native: 'How are you?',
              translation: 'Comment allez-vous?',
            },
            {
              native: 'I am fine, thank you.',
              translation: 'Je vais bien, merci.',
            },
            {
              native: 'What is your name?',
              translation: 'Comment vous appelez-vous?',
            },
            {
              native: 'My name is...',
              translation: 'Je m’appelle...',
            },
            {
              native: 'Nice to meet you.',
              translation: 'Enchanté(e).',
            },
            {
              native: 'Where are you from?',
              translation: 'D’où venez-vous?',
            },
            {
              native: 'I am from...',
              translation: 'Je viens de...',
            },
            {
              native: 'How old are you?',
              translation: 'Quel âge avez-vous?',
            },
            {
              native: 'I am ... years old.',
              translation: 'J’ai ... ans.',
            },
            {
              native: "I don't understand.",
              translation: 'Je ne comprends pas.',
            },
            {
              native: 'Please',
              translation: 'S’il vous plaît',
            },
            {
              native: 'Thank you',
              translation: 'Merci',
            },
          ];
        } else if (this.languageToLearn === 'ro') {
          this.slides = [
            {
              native: 'How are you?',
              translation: 'Ce faci?',
            },
            {
              native: 'I am fine, thank you.',
              translation: 'Bine, mulțumesc.',
            },
            {
              native: 'What is your name?',
              translation: 'Cum te numești?',
            },
            {
              native: 'My name is...',
              translation: 'Mă numesc...',
            },
            {
              native: 'Nice to meet you.',
              translation: 'Încântat de cunoștință.',
            },
            {
              native: 'Where are you from?',
              translation: 'De unde ești?',
            },
            {
              native: 'I am from...',
              translation: 'Sunt din...',
            },
            {
              native: 'How old are you?',
              translation: 'Câți ani ai?',
            },
            {
              native: 'I am ... years old.',
              translation: 'Am ... ani.',
            },
            {
              native: "I don't understand.",
              translation: 'Nu înțeleg.',
            },
            {
              native: 'Please',
              translation: 'Te rog',
            },
            {
              native: 'Thank you',
              translation: 'Mulțumesc',
            },
          ];
        }
        break;
      case 'Foods and Drinks':
        if (this.languageToLearn === 'en') {
          this.slides = [
            {
              native: 'Apple',
              translation: 'Apple',
            },
            {
              native: 'Pear',
              translation: 'Pear',
            },
            {
              native: 'Orange',
              translation: 'Orange',
            },
            {
              native: 'Bread',
              translation: 'Bread',
            },
            {
              native: 'Fruit',
              translation: 'Fruit',
            },
            {
              native: 'Vegetable',
              translation: 'Vegetable',
            },
            {
              native: 'Meat',
              translation: 'Meat',
            },
            {
              native: 'Fish',
              translation: 'Fish',
            },
            {
              native: 'Cheese',
              translation: 'Cheese',
            },
          ];
          this.slides2 = [
            {
              native: 'Water',
              translation: 'Water',
            },
            {
              native: 'Juice',
              translation: 'Juice',
            },
            {
              native: 'Milk',
              translation: 'Milk',
            },
            {
              native: 'Coffee',
              translation: 'Coffee',
            },
            {
              native: 'Tea',
              translation: 'Tea',
            },
            {
              native: 'Beer',
              translation: 'Beer',
            },
            {
              native: 'Wine',
              translation: 'Wine',
            },
          ];
        } else if (this.languageToLearn === 'fr') {
          this.slides = [
            {
              native: 'Apple',
              translation: 'Pomme',
            },
            {
              native: 'Pear',
              translation: 'Poire',
            },
            {
              native: 'Orange',
              translation: 'Orange',
            },
            {
              native: 'Bread',
              translation: 'Pain',
            },
            {
              native: 'Fruit',
              translation: 'Fruit',
            },
            {
              native: 'Vegetable',
              translation: 'Légume',
            },
            {
              native: 'Meat',
              translation: 'Viande',
            },
            {
              native: 'Fish',
              translation: 'Poisson',
            },
            {
              native: 'Cheese',
              translation: 'Fromage',
            },
          ];
          this.slides2 = [
            {
              native: 'Water',
              translation: 'Eau',
            },
            {
              native: 'Juice',
              translation: 'Jus',
            },
            {
              native: 'Milk',
              translation: 'Lait',
            },
            {
              native: 'Coffee',
              translation: 'Café',
            },
            {
              native: 'Tea',
              translation: 'Thé',
            },
            {
              native: 'Beer',
              translation: 'Bière',
            },
            {
              native: 'Wine',
              translation: 'Vin',
            },
          ];
        } else if (this.languageToLearn === 'ro') {
          this.slides = [
            {
              native: 'Apple',
              translation: 'Măr',
            },
            {
              native: 'Pear',
              translation: 'Pară',
            },
            {
              native: 'Orange',
              translation: 'Portocală',
            },
            {
              native: 'Bread',
              translation: 'Pâine',
            },
            {
              native: 'Fruit',
              translation: 'Fruct',
            },
            {
              native: 'Vegetable',
              translation: 'Legumă',
            },
            {
              native: 'Meat',
              translation: 'Carne',
            },
            {
              native: 'Fish',
              translation: 'Pește',
            },
            {
              native: 'Cheese',
              translation: 'Branză/Cașcaval',
            },
          ];
          this.slides2 = [
            {
              native: 'Water',
              translation: 'Apă',
            },
            {
              native: 'Juice',
              translation: 'Suc',
            },
            {
              native: 'Milk',
              translation: 'Lapte',
            },
            {
              native: 'Coffee',
              translation: 'Cafea',
            },
            {
              native: 'Tea',
              translation: 'Ceai',
            },
            {
              native: 'Beer',
              translation: 'Bere',
            },
            {
              native: 'Wine',
              translation: 'Vin',
            },
          ];
        }
        break;
      case 'Simple Present Tense':
        if (this.languageToLearn === 'en') {
          this.slides = [
            {
              native: 'I am',
              translation: 'I am',
            },
            {
              native: 'You are',
              translation: 'You are',
            },
            {
              native: 'He is',
              translation: 'He is',
            },
            {
              native: 'She is',
              translation: 'She is',
            },
            {
              native: 'We are',
              translation: 'We are',
            },
            {
              native: 'You (plural) are',
              translation: 'You (plural) are',
            },
            {
              native: 'They are',
              translation: 'They are',
            },
          ];
          this.slides2 = [
            {
              native: 'I have',
              translation: 'I have',
            },
            {
              native: 'You have',
              translation: 'You have',
            },
            {
              native: 'He has',
              translation: 'He has',
            },
            {
              native: 'She has',
              translation: 'She has',
            },
            {
              native: 'We have',
              translation: 'We have',
            },
            {
              native: 'You (plural) have',
              translation: 'You (plural) have',
            },
            {
              native: 'They have',
              translation: 'They have',
            },
          ];
        } else if (this.languageToLearn === 'fr') {
          this.slides = [
            {
              native: 'I am',
              translation: 'Je suis',
            },
            {
              native: 'You are',
              translation: 'Tu es',
            },
            {
              native: 'He is',
              translation: 'Il est',
            },
            {
              native: 'She is',
              translation: 'Elle est',
            },
            {
              native: 'We are',
              translation: 'Nous sommes',
            },
            {
              native: 'You (plural) are',
              translation: 'Vous êtes',
            },
            {
              native: 'They are',
              translation: 'Ils/Elles sont',
            },
          ];
          this.slides2 = [
            {
              native: 'I have',
              translation: 'J’ai',
            },
            {
              native: 'You have',
              translation: 'Tu as',
            },
            {
              native: 'He has',
              translation: 'Il a',
            },
            {
              native: 'She has',
              translation: 'Elle a',
            },
            {
              native: 'We have',
              translation: 'Nous avons',
            },
            {
              native: 'You (plural) have',
              translation: 'Vous avez',
            },
            {
              native: 'They have',
              translation: 'Ils/Elles ont',
            },
          ];
        } else if (this.languageToLearn === 'ro') {
          this.slides = [
            {
              native: 'I am',
              translation: 'Eu sunt',
            },
            {
              native: 'You are',
              translation: 'Tu ești',
            },
            {
              native: 'He is',
              translation: 'El este',
            },
            {
              native: 'She is',
              translation: 'Ea este',
            },
            {
              native: 'We are',
              translation: 'Noi suntem',
            },
            {
              native: 'You (plural) are',
              translation: 'Voi sunteți',
            },
            {
              native: 'They are',
              translation: 'Ei/Ele sunt',
            },
          ];
          this.slides2 = [
            {
              native: 'I have',
              translation: 'Eu am',
            },
            {
              native: 'You have',
              translation: 'Tu ai',
            },
            {
              native: 'He has',
              translation: 'El are',
            },
            {
              native: 'She has',
              translation: 'Ea are',
            },
            {
              native: 'We have',
              translation: 'Noi avem',
            },
            {
              native: 'You (plural) have',
              translation: 'Voi aveți',
            },
            {
              native: 'They have',
              translation: 'Ei/Ele au',
            },
          ];
        }
        break;
      case 'Shopping and Money':
        if (this.languageToLearn === 'en') {
          this.slides = [
            {
              native: 'How much does it cost?',
              translation: 'How much does it cost?',
            },
            {
              native: 'It costs...',
              translation: 'It costs...',
            },
            {
              native: 'I would like to buy...',
              translation: 'I would like to buy...',
            },
            {
              native: 'I would like to pay...',
              translation: 'I would like to pay...',
            },
          ];
          this.slides2 = [
            {
              native: 'Money',
              translation: 'Money',
            },
            {
              native: 'Cash',
              translation: 'Cash',
            },
            {
              native: 'Credit Card',
              translation: 'Credit Card',
            },
            {
              native: 'Receipt',
              translation: 'Receipt',
            },
            {
              native: 'Change',
              translation: 'Change',
            },
            {
              native: 'Expensive',
              translation: 'Expensive',
            },
            {
              native: 'Cheap',
              translation: 'Cheap',
            },
          ];
        } else if (this.languageToLearn === 'fr') {
          this.slides = [
            {
              native: 'How much does it cost?',
              translation: 'Combien ça coûte?',
            },
            {
              native: 'It costs...',
              translation: 'Ça coûte...',
            },
            {
              native: 'I would like to buy...',
              translation: 'Je voudrais acheter...',
            },
            {
              native: 'I would like to pay...',
              translation: 'Je voudrais payer...',
            },
          ];
          this.slides2 = [
            {
              native: 'Money',
              translation: 'Argent',
            },
            {
              native: 'Cash',
              translation: 'Espèces',
            },
            {
              native: 'Credit Card',
              translation: 'Carte de crédit',
            },
            {
              native: 'Receipt',
              translation: 'Reçu',
            },
            {
              native: 'Change',
              translation: 'Monnaie',
            },
            {
              native: 'Expensive',
              translation: 'Cher',
            },
            {
              native: 'Cheap',
              translation: 'Bon marché',
            },
          ];
        } else if (this.languageToLearn === 'ro') {
          this.slides = [
            {
              native: 'How much does it cost?',
              translation: 'Cât costă?',
            },
            {
              native: 'It costs...',
              translation: 'Costă...',
            },
            {
              native: 'I would like to buy...',
              translation: 'Aș dori să cumpăr...',
            },
            {
              native: 'I would like to pay...',
              translation: 'Aș dori să plătesc...',
            },
          ];
          this.slides2 = [
            {
              native: 'Money',
              translation: 'Bani',
            },
            {
              native: 'Cash',
              translation: 'Numerar',
            },
            {
              native: 'Credit Card',
              translation: 'Card de credit',
            },
            {
              native: 'Receipt',
              translation: 'Bon fiscal',
            },
            {
              native: 'Change',
              translation: 'Rest',
            },
            {
              native: 'Expensive',
              translation: 'Scump',
            },
            {
              native: 'Cheap',
              translation: 'Ieftin',
            },
          ];
        }
        break;
      case 'Expanded Vocabulary':
        if (this.languageToLearn === 'en') {
          this.slides = [
            {
              native: 'Pedagogy',
              translation: 'Pedagogy',
            },
            {
              native: 'Curriculum',
              translation: 'Curriculum',
            },
            {
              native: 'Syllabus',
              translation: 'Syllabus',
            },
            {
              native: 'Extracurricalar',
              translation: 'Extracurricular',
            },
          ];
          this.slides2 = [
            {
              native: 'Algorithm',
              translation: 'Algorithm',
            },
            {
              native: 'Cybersecurity',
              translation: 'Cybersecurity',
            },
            {
              native: 'Database',
              translation: 'Database',
            },
            {
              native: 'Programming',
              translation: 'Programming',
            },
          ];
          this.slides3 = [
            {
              native: 'Accommodation',
              translation: 'Accommodation',
            },
            {
              native: 'Landmark',
              translation: 'Landmark',
            },
            {
              native: 'Attraction',
              translation: 'Attraction',
            },
            {
              native: 'Itinerary',
              translation: 'Itinerary',
            },
            {
              native: 'Passport',
              translation: 'Passport',
            },
          ];
          this.slides4 = [
            {
              native: 'Economy',
              translation: 'Economy',
            },
            {
              native: 'Inflation',
              translation: 'Inflation',
            },
            {
              native: 'Investment',
              translation: 'Investment',
            },
            {
              native: 'Stock',
              translation: 'Stock',
            },
            {
              native: 'Tax',
              translation: 'Tax',
            },
          ];
          this.slides5 = [
            {
              native: 'Cuisine',
              translation: 'Cuisine',
            },
            {
              native: 'Dessert',
              translation: 'Dessert',
            },
            {
              native: 'Ingredient',
              translation: 'Ingredient',
            },
            {
              native: 'Recipe',
              translation: 'Recipe',
            },
            {
              native: 'Restaurant',
              translation: 'Restaurant',
            },
          ];
        } else if (this.languageToLearn === 'fr') {
          this.slides = [
            {
              native: 'Pedagogy',
              translation: 'Pédagogie',
            },
            {
              native: 'Curriculum',
              translation: 'Curriculum',
            },
            {
              native: 'Syllabus',
              translation: 'Programme',
            },
            {
              native: 'Extracurricular',
              translation: 'Extracurriculaire',
            },
          ];
          this.slides2 = [
            {
              native: 'Algorithm',
              translation: 'Algorithme',
            },
            {
              native: 'Cybersecurity',
              translation: 'Cybersécurité',
            },
            {
              native: 'Database',
              translation: 'Base de données',
            },
            {
              native: 'Programming',
              translation: 'Programmation',
            },
          ];
          this.slides3 = [
            {
              native: 'Accommodation',
              translation: 'Logement',
            },
            {
              native: 'Landmark',
              translation: 'Monument',
            },
            {
              native: 'Attraction',
              translation: 'Attraction',
            },
            {
              native: 'Itinerary',
              translation: 'Itinéraire',
            },
            {
              native: 'Passport',
              translation: 'Passeport',
            },
          ];
          this.slides4 = [
            {
              native: 'Economy',
              translation: 'Économie',
            },
            {
              native: 'Inflation',
              translation: 'Inflation',
            },
            {
              native: 'Investment',
              translation: 'Investissement',
            },
            {
              native: 'Stock',
              translation: 'Stock',
            },
            {
              native: 'Tax',
              translation: 'Impôt',
            },
          ];
          this.slides5 = [
            {
              native: 'Cuisine',
              translation: 'Cuisine',
            },
            {
              native: 'Dessert',
              translation: 'Dessert',
            },
            {
              native: 'Ingredient',
              translation: 'Ingrédient',
            },
            {
              native: 'Recipe',
              translation: 'Recette',
            },
            {
              native: 'Restaurant',
              translation: 'Restaurant',
            },
          ];
        } else if (this.languageToLearn === 'ro') {
          this.slides = [
            {
              native: 'Pedagogy',
              translation: 'Pedagogie',
            },
            {
              native: 'Curriculum',
              translation: 'Curriculum',
            },
            {
              native: 'Syllabus',
              translation: 'Programă',
            },
            {
              native: 'Extracurricular',
              translation: 'Extracuricular',
            },
          ];
          this.slides2 = [
            {
              native: 'Algorithm',
              translation: 'Algoritm',
            },
            {
              native: 'Cybersecurity',
              translation: 'Securitate cibernetică',
            },
            {
              native: 'Database',
              translation: 'Bază de date',
            },
            {
              native: 'Programming',
              translation: 'Programare',
            },
          ];
          this.slides3 = [
            {
              native: 'Accommodation',
              translation: 'Cazare',
            },
            {
              native: 'Landmark',
              translation: 'Monument',
            },
            {
              native: 'Attraction',
              translation: 'Atracție',
            },
            {
              native: 'Itinerary',
              translation: 'Itinerariu',
            },
            {
              native: 'Passport',
              translation: 'Pașaport',
            },
          ];
          this.slides4 = [
            {
              native: 'Economy',
              translation: 'Economie',
            },
            {
              native: 'Inflation',
              translation: 'Inflație',
            },
            {
              native: 'Investment',
              translation: 'Investiție',
            },
            {
              native: 'Stock',
              translation: 'Acțiune',
            },
            {
              native: 'Tax',
              translation: 'Impozit',
            },
          ];
          this.slides5 = [
            {
              native: 'Cuisine',
              translation: 'Bucătărie',
            },
            {
              native: 'Dessert',
              translation: 'Desert',
            },
            {
              native: 'Ingredient',
              translation: 'Ingredient',
            },
            {
              native: 'Recipe',
              translation: 'Rețetă',
            },
            {
              native: 'Restaurant',
              translation: 'Restaurant',
            },
          ];
        }
        break;
      case 'Intermediate Verb Tenses':
        if (this.languageToLearn === 'en') {
          this.slides = [
            {
              native: 'I am reading',
              translation: 'I am reading',
            },
            {
              native: 'You are reading',
              translation: 'You are reading',
            },
            {
              native: 'He is reading',
              translation: 'He is reading',
            },
            {
              native: 'She is reading',
              translation: 'She is reading',
            },
            {
              native: 'We are reading',
              translation: 'We are reading',
            },
            {
              native: 'You (plural) are reading',
              translation: 'You (plural) are reading',
            },
            {
              native: 'They are reading',
              translation: 'They are reading',
            },
          ];
          this.slides2 = [
            {
              native: 'I was reading when...',
              translation: 'I was reading when...',
            },
            {
              native: 'You were reading when...',
              translation: 'You were reading when...',
            },
            {
              native: 'He was reading when...',
              translation: 'He was reading when...',
            },
            {
              native: 'She was reading when...',
              translation: 'She was reading when...',
            },
            {
              native: 'We were reading when...',
              translation: 'We were reading when...',
            },
            {
              native: 'You (plural) were reading when...',
              translation: 'You (plural) were reading when...',
            },
            {
              native: 'They were reading when...',
              translation: 'They were reading when...',
            },
          ];
          this.slides3 = [
            {
              native: 'I had already read when...',
              translation: 'I had already read when...',
            },
            {
              native: 'You had already read when...',
              translation: 'You had already read when...',
            },
            {
              native: 'He had already read when...',
              translation: 'He had already read when...',
            },
            {
              native: 'She had already read when...',
              translation: 'She had already read when...',
            },
            {
              native: 'We had already read when...',
              translation: 'We had already read when...',
            },
            {
              native: 'You (plural) had already read when...',
              translation: 'You (plural) had already read when...',
            },
            {
              native: 'They had already read when...',
              translation: 'They had already read when...',
            },
          ];
          this.slides4 = [
            {
              native: 'I will have read 10 pages by Friday.',
              translation: 'I will have read 10 pages by Friday.',
            },
            {
              native: 'You will have read 10 pages by Friday.',
              translation: 'You will have read 10 pages by Friday.',
            },
            {
              native: 'He will have read 10 pages by Friday.',
              translation: 'He will have read 10 pages by Friday.',
            },
            {
              native: 'She will have read 10 pages by Friday.',
              translation: 'She will have read 10 pages by Friday.',
            },
            {
              native: 'We will have read 10 pages by Friday.',
              translation: 'We will have read 10 pages by Friday.',
            },
            {
              native: 'You (plural) will have read 10 pages by Friday.',
              translation: 'You (plural) will have read 10 pages by Friday.',
            },
            {
              native: 'They will have read 10 pages by Friday.',
              translation: 'They will have read 10 pages by Friday.',
            },
          ];
        } else if (this.languageToLearn === 'fr') {
          this.slides = [
            {
              native: 'I am reading',
              translation: 'Je lis',
            },
            {
              native: 'You are reading',
              translation: 'Tu lis',
            },
            {
              native: 'He is reading',
              translation: 'Il lit',
            },
            {
              native: 'She is reading',
              translation: 'Elle lit',
            },
            {
              native: 'We are reading',
              translation: 'Nous lisons',
            },
            {
              native: 'You (plural) are reading',
              translation: 'Vous lisez',
            },
            {
              native: 'They are reading',
              translation: 'Ils/Elles lisent',
            },
          ];
          this.slides2 = [
            {
              native: 'I was reading when...',
              translation: 'Je lisais quand...',
            },
            {
              native: 'You were reading when...',
              translation: 'Tu lisais quand...',
            },
            {
              native: 'He was reading when...',
              translation: 'Il lisait quand...',
            },
            {
              native: 'She was reading when...',
              translation: 'Elle lisait quand...',
            },
            {
              native: 'We were reading when...',
              translation: 'Nous lisions quand...',
            },
            {
              native: 'You (plural) were reading when...',
              translation: 'Vous lisiez quand...',
            },
            {
              native: 'They were reading when...',
              translation: 'Ils/Ell,es lisaient quand...',
            },
          ];
          this.slides3 = [
            {
              native: 'I had already read when...',
              translation: 'J’avais déjà lu quand...',
            },
            {
              native: 'You had already read when...',
              translation: 'Tu avais déjà lu quand...',
            },
            {
              native: 'He had already read when...',
              translation: 'Il avait déjà lu quand...',
            },
            {
              native: 'She had already read when...',
              translation: 'Elle avait déjà lu quand...',
            },
            {
              native: 'We had already read when...',
              translation: 'Nous avions déjà lu quand...',
            },
            {
              native: 'You (plural) had already read when...',
              translation: 'Vous aviez déjà lu quand...',
            },
            {
              native: 'They had already read when...',
              translation: 'Ils/Elles avaient déjà lu quand...',
            },
          ];
          this.slides4 = [
            {
              native: 'I will have read 10 pages by Friday.',
              translation: 'J’aurai lu 10 pages d’ici vendredi.',
            },
            {
              native: 'You will have read 10 pages by Friday.',
              translation: 'Tu auras lu 10 pages d’ici vendredi.',
            },
            {
              native: 'He will have read 10 pages by Friday.',
              translation: 'Il aura lu 10 pages d’ici vendredi.',
            },
            {
              native: 'She will have read 10 pages by Friday.',
              translation: 'Elle aura lu 10 pages d’ici vendredi.',
            },
            {
              native: 'We will have read 10 pages by Friday.',
              translation: 'Nous aurons lu 10 pages d’ici vendredi.',
            },
            {
              native: 'You (plural) will have read 10 pages by Friday.',
              translation: 'Vous aurez lu 10 pages d’ici vendredi.',
            },
            {
              native: 'They will have read 10 pages by Friday.',
              translation: 'Ils/Elles auront lu 10 pages d’ici vendredi.',
            },
          ];
        } else if (this.languageToLearn === 'ro') {
          this.slides = [
            {
              native: 'I am reading',
              translation: 'Eu citesc',
            },
            {
              native: 'You are reading',
              translation: 'Tu citești',
            },
            {
              native: 'He is reading',
              translation: 'El citește',
            },
            {
              native: 'She is reading',
              translation: 'Ea citește',
            },
            {
              native: 'We are reading',
              translation: 'Noi citim',
            },
            {
              native: 'You (plural) are reading',
              translation: 'Voi citiți',
            },
            {
              native: 'They are reading',
              translation: 'Ei/Ele citesc',
            },
          ];
          this.slides2 = [
            {
              native: 'I was reading when...',
              translation: 'Eu citeam când...',
            },
            {
              native: 'You were reading when...',
              translation: 'Tu citeai când...',
            },
            {
              native: 'He was reading when...',
              translation: 'El citea când...',
            },
            {
              native: 'She was reading when...',
              translation: 'Ea citea când...',
            },
            {
              native: 'We were reading when...',
              translation: 'Noi citeam când...',
            },
            {
              native: 'You (plural) were reading when...',
              translation: 'Voi citeați când...',
            },
            {
              native: 'They were reading when...',
              translation: 'Ei/Ele citeau când...',
            },
          ];
          this.slides3 = [
            {
              native: 'I had already read when...',
              translation: 'Eu citisem când...',
            },
            {
              native: 'You had already read when...',
              translation: 'Tu citiseși când...',
            },
            {
              native: 'He had already read when...',
              translation: 'El citise când...',
            },
            {
              native: 'She had already read when...',
              translation: 'Ea citise când...',
            },
            {
              native: 'We had already read when...',
              translation: 'Noi citisem când...',
            },
            {
              native: 'You (plural) had already read when...',
              translation: 'Voi citiserăți când...',
            },
            {
              native: 'They had already read when...',
              translation: 'Ei/Ele citiseră când...',
            },
          ];
          this.slides4 = [
            {
              native: 'I will have read 10 pages by Friday.',
              translation: 'Eu voi fi citit 10 pagini până vineri.',
            },
            {
              native: 'You will have read 10 pages by Friday.',
              translation: 'Tu vei fi citit 10 pagini până vineri.',
            },
            {
              native: 'He will have read 10 pages by Friday.',
              translation: 'El va fi citit 10 pagini până vineri.',
            },
            {
              native: 'She will have read 10 pages by Friday.',
              translation: 'Ea va fi citit 10 pagini până vineri.',
            },
            {
              native: 'We will have read 10 pages by Friday.',
              translation: 'Noi vom fi citit 10 pagini până vineri.',
            },
            {
              native: 'You (plural) will have read 10 pages by Friday.',
              translation: 'Voi veți fi citit 10 pagini până vineri.',
            },
            {
              native: 'They will have read 10 pages by Friday.',
              translation: 'Ei/Ele vor fi citit 10 pagini până vineri.',
            },
          ];
        }
        break;
      case 'Conditional Sentences':
        if (this.languageToLearn === 'en') {
          this.slides = [
            {
              native: 'If you heat ice, it melts.',
              translation: 'If you heat ice, it melts.',
            },
            {
              native: 'If I had a million dollars, I would buy a house.',
              translation: 'If I had a million dollars, I would buy a house.',
            },
            {
              native: "If she had known, she wouldn't have come.",
              translation: "If she had known, she wouldn't have come.",
            },
            {
              native: "If it rains tomorrow, I won't go to the beach.",
              translation: "If it rains tomorrow, I won't go to the beach.",
            },
          ];
        } else if (this.languageToLearn === 'fr') {
          this.slides = [
            {
              native: 'If you heat ice, it melts.',
              translation: 'Si vous chauffez la glace, elle fond.',
            },
            {
              native: 'If I had a million dollars, I would buy a house.',
              translation:
                'Si j’avais un million de dollars, j’achèterais une maison.',
            },
            {
              native: "If she had known, she wouldn't have come.",
              translation: 'Si elle avait su, elle ne serait pas venue.',
            },
            {
              native: "If it rains tomorrow, I won't go to the beach.",
              translation: 'S’il pleut demain, je n’irai pas à la plage.',
            },
          ];
        } else if (this.languageToLearn === 'ro') {
          this.slides = [
            {
              native: 'If you heat ice, it melts.',
              translation: 'Dacă încălzești gheața, se topește.',
            },
            {
              native: 'If I had a million dollars, I would buy a house.',
              translation:
                'Dacă aș avea un milion de dolari, aș cumpăra o casă.',
            },
            {
              native: "If she had known, she wouldn't have come.",
              translation: 'Dacă ar fi știut, nu ar fi venit.',
            },
            {
              native: "If it rains tomorrow, I won't go to the beach.",
              translation: 'Dacă plouă mâine, nu merg la plajă.',
            },
          ];
        }
        break;
      case 'Advanced Vocabulary':
        if (this.languageToLearn === 'en') {
          this.slides = [
            {
              native: 'Eloquent',
              translation: 'Eloquent',
            },
            {
              native: 'Ubiquitous',
              translation: 'Ubiquitous',
            },
            {
              native: 'Ephemeral',
              translation: 'Ephemeral',
            },
            {
              native: 'Sycophant',
              translation: 'Sycophant',
            },
            {
              native: 'Capricious',
              translation: 'Capricious',
            },
            {
              native: 'Esoteric',
              translation: 'Esoteric',
            },
            {
              native: 'Ineffable',
              translation: 'Ineffable',
            },
            {
              native: 'Cacophony',
              translation: 'Cacophony',
            },
            {
              native: 'Quotidian',
              translation: 'Quotidian',
            },
            {
              native: 'Panacea',
              translation: 'Panacea',
            },
            {
              native: 'Exacerbate',
              translation: 'Exacerbate',
            },
            {
              native: 'Pernicious',
              translation: 'Pernicious',
            },
            {
              native: 'Plethora',
              translation: 'Plethora',
            },
            {
              native: 'Superfluous',
              translation: 'Superfluous',
            },
            {
              native: 'Languid',
              translation: 'Languid',
            },
          ];
        } else if (this.languageToLearn === 'fr') {
          this.slides = [
            {
              native: 'Eloquent',
              translation: 'Éloquent',
            },
            {
              native: 'Ubiquitous',
              translation: 'Omniprésent',
            },
            {
              native: 'Ephemeral',
              translation: 'Éphémère',
            },
            {
              native: 'Sycophant',
              translation: 'Flagorneur',
            },
            {
              native: 'Capricious',
              translation: 'Capricieux',
            },
            {
              native: 'Esoteric',
              translation: 'Ésotérique',
            },
            {
              native: 'Ineffable',
              translation: 'Ineffable',
            },
            {
              native: 'Cacophony',
              translation: 'Cacophonie',
            },
            {
              native: 'Quotidian',
              translation: 'Quotidien',
            },
            {
              native: 'Panacea',
              translation: 'Panacée',
            },
            {
              native: 'Exacerbate',
              translation: 'Exacerber',
            },
            {
              native: 'Pernicious',
              translation: 'Nocif',
            },
            {
              native: 'Plethora',
              translation: 'Pléthore',
            },
            {
              native: 'Superfluous',
              translation: 'Superflu',
            },
            {
              native: 'Languid',
              translation: 'Langoureux',
            },
          ];
        } else if (this.languageToLearn === 'ro') {
          this.slides = [
            {
              native: 'Eloquent',
              translation: 'Elocvent',
            },
            {
              native: 'Ubiquitous',
              translation: 'Omniprezent',
            },
            {
              native: 'Ephemeral',
              translation: 'Efemer',
            },
            {
              native: 'Sycophant',
              translation: 'Lingușitor',
            },
            {
              native: 'Capricious',
              translation: 'Capricios',
            },
            {
              native: 'Esoteric',
              translation: 'Ezoteric',
            },
            {
              native: 'Ineffable',
              translation: 'Inefabil',
            },
            {
              native: 'Cacophony',
              translation: 'Cacofonie',
            },
            {
              native: 'Quotidian',
              translation: 'Cotidian',
            },
            {
              native: 'Panacea',
              translation: 'Panaceu',
            },
            {
              native: 'Exacerbate',
              translation: 'Exacerba',
            },
            {
              native: 'Pernicious',
              translation: 'Nociv',
            },
            {
              native: 'Plethora',
              translation: 'Plenitudine',
            },
            {
              native: 'Superfluous',
              translation: 'Inutil',
            },
            {
              native: 'Languid',
              translation: 'Apatic',
            },
          ];
        }
        break;
      case 'Advanced Verb Forms':
        if (this.languageToLearn === 'en') {
          this.slides = [
            {
              native:
                'By next month, I will have been working here for 5 years.',
              translation:
                'By next month, I will have been working here for 5 years.',
            },
            {
              native: 'He said he would call me tomorrow.',
              translation: 'He said he would call me tomorrow.',
            },
            {
              native: 'At that time, I thought I would never see him again.',
              translation:
                'At that time, I though I would never see him again.',
            },
            {
              native: 'If he were to finish on time, it would have been great.',
              translation:
                'If he were to finish on time, it would have been great.',
            },
            {
              native:
                'If I had studied, I would be able to answer the question.',
              translation:
                'If I had studied, I would be able to answer the question.',
            },
            {
              native: 'I would have been happier if I had gone to the party.',
              translation:
                'I would have been happier if I had gone to the party.',
            },
          ];
        } else if (this.languageToLearn === 'fr') {
          this.slides = [
            {
              native:
                'By next month, I will have been working here for 5 years.',
              translation:
                'D’ici le mois prochain, je travaillerai ici depuis 5 ans.',
            },
            {
              native: 'He said he would call me tomorrow.',
              translation: 'Il a dit qu’il m’appellerait demain.',
            },
            {
              native: 'At that time, I thought I would never see him again.',
              translation:
                'À cette époque, je pensais que je ne le reverrais plus jamais.',
            },
            {
              native: 'If he were to finish on time, it would have been great.',
              translation: 'S’il finissait à temps, ce serait formidable.',
            },
            {
              native:
                'If I had studied, I would be able to answer the question.',
              translation:
                'Si j’avais étudié, je serais capable de répondre à la question.',
            },
            {
              native: 'I would have been happier if I had gone to the party.',
              translation:
                'J’aurais été plus heureux si j’étais allé à la fête.',
            },
          ];
        } else if (this.languageToLearn === 'ro') {
          this.slides = [
            {
              native:
                'By next month, I will have been working here for 5 years.',
              translation: 'Până luna viitoare, voi lucra aici de 5 ani.',
            },
            {
              native: 'He said he would call me tomorrow.',
              translation: 'El a spus că mă va suna mâine.',
            },
            {
              native: 'At that time, I thought I would never see him again.',
              translation:
                'La acea vreme, credeam că nu îl voi mai vedea niciodată.',
            },
            {
              native: 'If he were to finish on time, it would have been great.',
              translation: 'Dacă ar fi terminat la timp, ar fi fost minunat.',
            },
            {
              native:
                'If I had studied, I would be able to answer the question.',
              translation:
                'Dacă aș fi studiat, aș fi fost capabil să răspund la întrebare.',
            },
            {
              native: 'I would have been happier if I had gone to the party.',
              translation:
                'Aș fi fost mai fericit dacă aș fi mers la petrecere.',
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
