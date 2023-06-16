import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  slides2: any[] = [
    {text: 'Lion', text2: 'leu'},
    {text: 'Elephant', text2: 'elefant'},
    {text: 'Pig', text2: 'porc'},
    {text: 'Dog', text2: 'câine'},
    {text: 'Red', text2: 'roșu'},
    {text: 'Blue', text2: 'albastru'},
    {text: 'Green', text2: 'verde'},
    {text: 'Yellow', text2: 'galben'},
    {text: 'One', text2: 'unu'},
    {text: 'Two', text2: 'doi'},
    {text: 'Three', text2: 'trei'},
    {text: 'Four', text2: 'patru'},
    {text: 'Five', text2: 'cinci'},
    {text: 'Six', text2: 'șase'},
    {text: 'Seven', text2: 'șapte'},
    {text: 'Eight', text2: 'opt'},
    {text: 'Nine', text2: 'nouă'},
    {text: 'Zero', text2: 'zero'},
    {text: 'Ten', text2: 'zece'},
    {text: 'Mother', text2: 'mamă'},
    {text: 'Father', text2: 'tată'},
    {text: 'Brother', text2: 'frate'},
    {text: 'Sister', text2: 'soră'},
  ];
  displayText: string = '';
  inputText: string = '';
  color: string = '';
  message: string = '';
  currentSlideIndex: number = 0;

  randomIndex() {
    let availableSlides = this.slides2.filter(slide => slide !== this.slides2[this.currentSlideIndex]);
    return Math.floor(Math.random() * availableSlides.length);
  }

  ngOnInit() {
    console.log(this.slides2);
    this.getRandomSlide();
  }
  
  getRandomSlide() {
    this.currentSlideIndex = this.randomIndex();
    console.log(this.slides2[this.currentSlideIndex])
    this.displayText = this.slides2[this.currentSlideIndex].text;
    this.inputText = '';
    this.message = '';
  }

  checkAnswer() {
    if (this.inputText === this.slides2[this.currentSlideIndex].text2) {
      this.color = 'green';
      this.message = 'Correct';
      setTimeout(() => {
        this.getRandomSlide();
      }, 500);
    } else {
      this.color = 'red';
      this.message = 'Incorrect';
    }
  }
}
