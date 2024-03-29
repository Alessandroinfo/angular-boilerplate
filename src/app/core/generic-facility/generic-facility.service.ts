import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {GlobalDataService} from '../global-data/global-data.service';
import {LanguageItem} from '@app/shared/models/language-app';
import {AngularError} from '@app/shared/models/angular-error';
import {LoadingState} from '@app/shared/models/loading-app';

@Injectable({
  providedIn: 'root',
})
export class GenericFacilityService {
  // ------------------------------------------------------------ ATTRIBUTES ------------------------------------------------------------ //

  // SUBJECT FOR KNOW IF THERE IS AN ERROR ON THE APP
  private errorAngular$: BehaviorSubject<AngularError | null> = new BehaviorSubject<AngularError | null>(null);

  // THIS OBS IS FOR LOADER STATUS
  private loadingState$: BehaviorSubject<LoadingState> = new BehaviorSubject<LoadingState>(
    this.gldSvc.loadingDefaultOffState
  );

  // ACTIVE LANGUAGE OF THE APP
  private languageActive$: BehaviorSubject<LanguageItem | null> = new BehaviorSubject<LanguageItem | null>(null);

  // private languageActive$: BehaviorSubject<LanguageItem> = new BehaviorSubject<LanguageItem>(this.gldSvc.getLanguagesDefault());

  constructor(private gldSvc: GlobalDataService, @Inject(LOCALE_ID) protected localeId: string) {
    // CHECK IF THERE IS A LOCALEID IN LOCALSTORAGE
    // Retrieve the object from storage
    // try {
    //   const languageSetted = localStorage.getItem('localeId');
    //   if (languageSetted) {
    //     this.setLanguageActive(JSON.parse(languageSetted));
    //   }
    // } catch (e) {
    //   console.error('There isn\'t a language setted in local storage:', e);
    // }
  }

  // ---------------------------------------------------------- GETTER & SETTER --------------------------------------------------------- //

  // LOADER STATE
  getLoadingState(): Observable<LoadingState> {
    return this.loadingState$.asObservable();
  }

  setLoadingState(state: LoadingState) {
    this.loadingState$.next(state);
  }

  // ERROR MANAGE
  getErrorAngular(): Observable<AngularError | null> {
    return this.errorAngular$.asObservable();
  }

  setErrorAngular(state: AngularError) {
    this.errorAngular$.next(state);
  }

  // LANGUAGE ACTIVE
  getLanguageActive(): Observable<LanguageItem | null> {
    return this.languageActive$.asObservable();
  }

  setLanguageActive(lang: LanguageItem) {
    this.languageActive$.next(lang);
  }
}
