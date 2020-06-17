import {Component, Inject, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import {takeWhile, tap} from 'rxjs/operators';
import {LoadingState} from './shared/models';
import {GenericFacilityService} from './core/services/generic-facility.service';
import {GlobalDataService} from './core/services/global-data.service';
import {environment} from '../environments/environment';
import {ApiService} from './core/services/api.service';

@Component({
  selector: 'app-root',
  template: `
    <app-loader class="fixed top-0 right-0 left-0" [state]="loadingState"></app-loader>
    <app-version></app-version>
    <button (click)="aapi()">press</button>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  // FLAG FOR COMPLETE, UNSUBSCRIBE OBSERVABLES
  alive = true;

  // FOR LOADING STATUS DEFAULT FALSE ALL
  loadingState: LoadingState = this.gcdSvc.LoadingDefaultOffState;

  constructor(
    @Inject(LOCALE_ID) protected localeId: string,
    private gcfSvc: GenericFacilityService,
    private gcdSvc: GlobalDataService,
    public api: ApiService
  ) {
    // TODO REMOVE THIS, ONLY TO KNOW WHAT LANGUAGE IS
    if (!environment.production) {
      console.log(this.localeId);
    }
  }

  ngOnInit(): void {
    // PIPE FOR GET ISLOADING STATUS
    this.gcfSvc.getLoadingState().pipe(
      takeWhile(() => this.alive),
      tap(state => {
        this.loadingState = state;
      })
    ).subscribe();
  }

  aapi() {
    this.api.api().pipe(tap(val => {
      console.log(val);
    })).subscribe();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
