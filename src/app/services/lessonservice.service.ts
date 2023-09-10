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
    { title: 'Common Phrases', icon: 'chat', url: '/lesson/CommonPhrases' },
    {
      title: 'Foods and Drinks',
      icon: 'fastfood',
      url: '/lesson/FoodsAndDrinks',
    },
    {
      title: 'Simple Present Tense',
      icon: 'list_alt',
      url: '/lesson/SimplePresentTense',
    },
    {
      title: 'Shopping and Money',
      icon: 'shopping_cart',
      url: '/lesson/ShoppingAndMoney',
    },
  ];

  lessonsIntermediate = [
    { title: 'Grammar Rules', icon: 'assignment', url: '/lesson/GrammarRules' },
    {
      title: 'Expanded Vocabulary',
      icon: 'library_books',
      url: '/lesson/ExpandedVocabulary',
    },
    {
      title: 'Intermediate Verb Tenses',
      icon: 'history_edu',
      url: '/lesson/IntermediateVerbTenses',
    },
    {
      title: 'Conditional Sentences',
      icon: 'call_split',
      url: '/lesson/ConditionalSentences',
    },
  ];

  lessonsAdvanced = [
    {
      title: 'Advanced Vocabulary',
      icon: 'library_books',
      url: '/lesson/AdvancedVocabulary',
    },
    {
      title: 'Complex Grammar',
      icon: 'assignment',
      url: '/lesson/ComplexGrammar',
    },
    {
      title: 'Advanced Verb Forms',
      icon: 'history_edu',
      url: '/lesson/AdvancedVerbForms',
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
