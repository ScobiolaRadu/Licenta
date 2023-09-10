import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StorageService } from 'src/app/services/storageservice.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  slidesBegginer: any[] = [];
  slidesIntermediate: any[] = [];
  slidesAdvanced: any[] = [];

  displayText: string = '';
  inputText: string = '';
  color: string = '';
  message: string = '';
  currentSlideIndex: number = 0;
  testTitle = '';
  array: any[] = [];
  testLength: number = 1;
  ended = false;
  points: number = 0;
  previousPoints: number = 0;
  languageToLearn: string = '';
  nativeLanguage: string = '';
  disabled: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService,
    private authService: AuthenticationService
  ) {
    authService.currentUser$.subscribe((user) => {
      if (user) {
        storageService
          .getUserLanguageToLearnByEmail(
            this.authService.getCurrentUser()?.email || ''
          )
          .subscribe((languageToLearn) => {
            this.languageToLearn = languageToLearn || '';
            this.initTests();
          });

        storageService
          .getUserNativeLanguageByEmail(
            this.authService.getCurrentUser()?.email || ''
          )
          .subscribe((nativeLanguage) => {
            this.nativeLanguage = nativeLanguage || '';
          });
      }
    });
  }

  private initTests() {
    if (this.languageToLearn === 'ro') {
      this.slidesBegginer = [];
    } else if (this.languageToLearn === 'fr') {
    } else if (this.languageToLearn === 'en') {
      this.slidesBegginer = [
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
    }

    const urlSegments = this.route.snapshot.url;
    this.testTitle = urlSegments[urlSegments.length - 1].path;

    switch (this.testTitle) {
      case 'begginer':
        this.array = this.slidesBegginer;
        break;
      case 'intermediate':
        this.array = this.slidesIntermediate;
        break;
      case 'advanced':
        this.array = this.slidesAdvanced;
        break;
    }
    this.getRandomSlide(this.array);
    this.storageService
      .getUserPointsByEmail(this.authService.getCurrentUser()?.email || '')
      .subscribe((points) => {
        this.previousPoints = points || 0;
      });
  }

  randomIndex(array: any[]) {
    let availableSlides = this.array.filter(
      (slide) => slide !== this.array[this.currentSlideIndex]
    );
    return Math.floor(Math.random() * availableSlides.length);
  }

  ngOnInit() {}

  getRandomSlide(array: any[]) {
    this.currentSlideIndex = this.randomIndex(this.array);
    this.displayText = this.array[this.currentSlideIndex].native;
    this.inputText = '';
    this.message = '';
  }

  checkAnswer() {
    this.disabled = true;
    if (
      this.inputText.toLowerCase() ===
      this.array[this.currentSlideIndex].translation.toLowerCase()
    ) {
      this.color = 'green';
      if (this.nativeLanguage === 'en') this.message = 'Correct';
      else if (this.nativeLanguage === 'fr') this.message = 'Correct';
      else if (this.nativeLanguage === 'ro') this.message = 'Corect';
      this.points += 10;
      if (this.testLength !== 2)
        setTimeout(() => {
          this.getRandomSlide(this.array);
          this.disabled = false;
        }, 500);
      else {
        setTimeout(() => {
          this.color = '';
          this.message = '';
          this.inputText = '';
          this.ended = true;
          this.storageService.updateUserPointsByEmail(
            this.authService.getCurrentUser()?.email || '',
            this.points + this.previousPoints
          );
        }, 500);
      }
    } else {
      this.color = 'red';
      if (this.nativeLanguage === 'en')
        this.message =
          'Incorrect, the correct answer was ' +
          this.array[this.currentSlideIndex].translation +
          '.';
      else if (this.nativeLanguage === 'fr')
        this.message =
          'Incorrect, la bonne réponse était ' +
          this.array[this.currentSlideIndex].translation +
          '.';
      else if (this.nativeLanguage === 'ro')
        this.message =
          'Incorect, răspunsul corect era ' +
          this.array[this.currentSlideIndex].translation +
          '.';
      if (this.testLength !== 2)
        setTimeout(() => {
          this.getRandomSlide(this.array);
          this.disabled = false;
        }, 2000);
      else {
        setTimeout(() => {
          this.color = '';
          this.message = '';
          this.inputText = '';
          this.ended = true;
          this.storageService.updateUserPointsByEmail(
            this.authService.getCurrentUser()?.email || '',
            this.points + this.previousPoints
          );
        }, 2000);
      }
    }
    this.testLength++;
    if (this.testLength === 3) this.testLength = 2;
  }
}
