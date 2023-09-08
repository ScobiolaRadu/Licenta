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
  lessons = [
    { title: 'Animals', icon: 'pets', url: '/lesson/Animals' },
    { title: 'Colors', icon: 'palette', url: '/lesson/Colors' },
    { title: 'Numbers', icon: 'numbers', url: '/lesson/Numbers' },
    { title: 'People', icon: 'people', url: '/lesson/People' },
  ];

  getLessons() {
    return this.lessons;
  }
}
