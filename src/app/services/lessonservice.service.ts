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
    { title: 'Greetings', icon: 'forum', url: '/lesson/Greetings' },
    { title: 'Numbers', icon: 'numbers', url: '/lesson/Numbers' },
    { title: 'People', icon: 'people', url: '/lesson/People' },
    { title: 'Common Phrases', icon: 'chat', url: '/lesson/Common Phrases' },
    {
      title: 'Foods and Drinks',
      icon: 'fastfood',
      url: '/lesson/Foods and Drinks',
    },
    {
      title: 'Simple Present Tense',
      icon: 'list_alt',
      url: '/lesson/Simple Present Tense',
    },
    {
      title: 'Shopping and Money',
      icon: 'shopping_cart',
      url: '/lesson/Shopping and Money',
    },
  ];

  lessonsIntermediate = [
    {
      title: 'Expanded Vocabulary',
      icon: 'library_books',
      url: '/lesson/Expanded Vocabulary',
    },
    {
      title: 'Intermediate Verb Tenses',
      icon: 'history_edu',
      url: '/lesson/Intermediate Verb Tenses',
    },
    {
      title: 'Conditional Sentences',
      icon: 'call_split',
      url: '/lesson/Conditional Sentences',
    },
  ];

  lessonsAdvanced = [
    {
      title: 'Advanced Vocabulary',
      icon: 'library_books',
      url: '/lesson/Advanced Vocabulary',
    },
    {
      title: 'Advanced Verb Forms',
      icon: 'history_edu',
      url: '/lesson/Advanced Verb Forms',
    },
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
