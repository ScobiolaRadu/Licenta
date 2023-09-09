import { Injectable } from '@angular/core';

export interface Lesson {
  title: string;
  icon: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  lessonsBegginer = [
    { title: 'Animals', icon: 'pets', url: '/lesson/Animals' },
    { title: 'Colors', icon: 'palette', url: '/lesson/Colors' },
    { title: 'Numbers', icon: 'numbers', url: '/lesson/Numbers' },
    { title: 'People', icon: 'people', url: '/lesson/People' },
  ];

  lessonsIntermediate = [
    { title: 'Animals', icon: 'pets', url: '/lesson/Animals' },
    { title: 'Colors', icon: 'palette', url: '/lesson/Colors' },
    { title: 'Numbers', icon: 'numbers', url: '/lesson/Numbers' },
    { title: 'People', icon: 'people', url: '/lesson/People' },
  ];

  lessonsAdvanced = [
    { title: 'Animals', icon: 'pets', url: '/lesson/Animals' },
    { title: 'Colors', icon: 'palette', url: '/lesson/Colors' },
    { title: 'Numbers', icon: 'numbers', url: '/lesson/Numbers' },
    { title: 'People', icon: 'people', url: '/lesson/People' },
  ];

  getLessonsBegginer() {
    return this.lessonsBegginer;
  }

  getLessonsIntermediate() {
    return this.lessonsIntermediate;
  }

  getLessonsAdvanced() {
    return this.lessonsAdvanced;
  }
}
