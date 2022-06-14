import {Injectable} from '@angular/core';
import {LoadingHeaders, LoadingState} from '@app/shared/models/loading-app';
import {LanguageItem, LanguagesList} from '@app/shared/models/language-app';

@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {
  // CODE FOR LANGUAGE LIST
  // WITH DEFAULT CONF IS THIS THE LANG
  // DEFAULT LOADING STATE
  public LoadingDefaultOffState: LoadingState = {
    isLoading: false,
    blockOverlay: false,
    centerLoading: false,
    topLoading: false,
  };
  // HTTP HEADER FOR LOADER
  public loadingHeaders: LoadingHeaders = {
    BLOCKOVERLAY: 'blockoverlay',
    CENTERLOADER: 'centerloader',
    TOPLOADER: 'toploader',
  };

  // LANGUAGE LIST
  // WHEN NO CONF {code: 'en-US', label: 'English'},
  private languageList: LanguagesList = [
    {code: 'en', label: 'English'},
    {code: 'es', label: 'Espanol'},
    {code: 'fr', label: 'Françoise'},
    {code: 'it', label: 'Italiano'},
    {code: 'de', label: 'Deutsch'},
  ];

  // DEFAULT LANGUAGE
  private languageDefault = {code: 'en', label: 'English'};

  constructor() {}

  // ---------------------------------------------------------- GETTER & SETTER --------------------------------------------------------- //

  // LANGUAGES
  getLanguagesList(): LanguagesList {
    return this.languageList;
  }

  setLanguagesList(langList: LanguagesList): void {
    this.languageList = langList;
  }

  // DEFAULT LANGUAGE
  getLanguageDefault(): LanguageItem {
    return this.languageDefault;
  }

  setLanguageDefault(langDef: LanguageItem): void {
    this.languageDefault = langDef;
  }
}
