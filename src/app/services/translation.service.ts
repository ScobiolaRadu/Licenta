import { Injectable, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storageservice.service';
import { Pipe } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<string>('en');
  currentLanguage$: Observable<string> =
    this.currentLanguageSubject.asObservable();

  constructor(
    private translate: TranslateService,
    private storageService: StorageService
  ) {}

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLanguageSubject.next(lang);
  }
}
