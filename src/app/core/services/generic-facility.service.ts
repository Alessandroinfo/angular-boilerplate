import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AngularError, LanguageItem, LoadingState} from '../../shared/models';
import {GlobalDataService} from './global-data.service';

@Injectable({
  providedIn: 'root'
})
export class GenericFacilityService {

  // ------------------------------------------------------------ ATTRIBUTES ------------------------------------------------------------ //

  // SUBJECT FOR KNOW IF THERE IS AN ERROR ON THE APP
  private errorAngular$: BehaviorSubject<AngularError> = new BehaviorSubject<AngularError>(null);

  // THIS OBS IS FOR LOADER STATUS
  private loadingState$: BehaviorSubject<LoadingState> = new BehaviorSubject<LoadingState>(this.gldSvc.LoadingDefaultOffState);

  // ACTIVE LANGUAGE OF THE APP
  private languageActive$: BehaviorSubject<LanguageItem> = new BehaviorSubject<LanguageItem>(null);

  // private languageActive$: BehaviorSubject<LanguageItem> = new BehaviorSubject<LanguageItem>(this.gldSvc.getLanguagesDefault());

  constructor(private gldSvc: GlobalDataService,
              @Inject(LOCALE_ID) protected localeId: string) {
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
  getErrorAngular(): Observable<AngularError> {
    return this.errorAngular$.asObservable();
  }

  setErrorAngular(state: AngularError) {
    this.errorAngular$.next(state);
  }

  // LANGUAGE ACTIVE
  getLanguageActive(): Observable<LanguageItem> {
    return this.languageActive$.asObservable();
  }

  setLanguageActive(lang: LanguageItem) {
    this.languageActive$.next(lang);
  }

}

