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
  slidesBegginer: any[] = [
    { text: 'Lion', text2: 'leu' },
    { text: 'Elephant', text2: 'elefant' },
    { text: 'Pig', text2: 'porc' },
    { text: 'Dog', text2: 'câine' },
    { text: 'Red', text2: 'roșu' },
    { text: 'Blue', text2: 'albastru' },
    { text: 'Green', text2: 'verde' },
    { text: 'Yellow', text2: 'galben' },
    { text: 'One', text2: 'unu' },
    { text: 'Two', text2: 'doi' },
    { text: 'Three', text2: 'trei' },
    { text: 'Four', text2: 'patru' },
    { text: 'Five', text2: 'cinci' },
    { text: 'Six', text2: 'șase' },
    { text: 'Seven', text2: 'șapte' },
    { text: 'Eight', text2: 'opt' },
    { text: 'Nine', text2: 'nouă' },
    { text: 'Zero', text2: 'zero' },
    { text: 'Ten', text2: 'zece' },
    { text: 'Mother', text2: 'mamă' },
    { text: 'Father', text2: 'tată' },
    { text: 'Brother', text2: 'frate' },
    { text: 'Sister', text2: 'soră' },
  ];

  slidesIntermediate: any[] = [{ text: 'ceva', text2: 'ceva2' }];

  slidesAdvanced: any[] = [{ text: 'ceva3', text2: 'ceva4' }];

  displayText: string = '';
  inputText: string = '';
  color: string = '';
  message: string = '';
  currentSlideIndex: number = 0;
  testTitle = '';
  array: any[] = [];
  testLength: number = 0;
  ended = false;
  points: number = 0;
  previousPoints: number = 0;

  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService,
    private authService: AuthenticationService
  ) {}

  randomIndex(array: any[]) {
    let availableSlides = this.array.filter(
      (slide) => slide !== this.array[this.currentSlideIndex]
    );
    return Math.floor(Math.random() * availableSlides.length);
  }

  ngOnInit() {
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

  getRandomSlide(array: any[]) {
    this.currentSlideIndex = this.randomIndex(this.array);
    this.displayText = this.array[this.currentSlideIndex].text;
    this.inputText = '';
    this.message = '';
  }

  checkAnswer() {
    this.testLength++;

    if (
      this.inputText.toLowerCase() === this.array[this.currentSlideIndex].text2
    ) {
      this.color = 'green';
      this.message = 'Correct';
      this.points += 10;
      if (this.testLength !== 2)
        setTimeout(() => {
          this.getRandomSlide(this.array);
        }, 500);
      else
        setTimeout(() => {
          this.color = '';
          this.displayText = 'Test ended!';
          this.message = '';
          this.inputText = '';
          this.ended = true;
          this.storageService.updateUserPointsByEmail(
            this.authService.getCurrentUser()?.email || '',
            this.points + this.previousPoints
          );
        }, 500);
    } else {
      this.color = 'red';
      this.message =
        'Incorrect, the correct answer was ' +
        this.array[this.currentSlideIndex].text2 +
        '.';
      if (this.testLength !== 2)
        setTimeout(() => {
          this.getRandomSlide(this.array);
        }, 2000);
      else
        setTimeout(() => {
          this.color = '';
          this.displayText = 'Test ended!';
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
}
