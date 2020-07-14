import {Component, Inject, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import {takeWhile, tap} from 'rxjs/operators';
import {LoadingState} from './shared/models';
import {GenericFacilityService} from './core/services/generic-facility.service';
import {GlobalDataService} from './core/services/global-data.service';
import {environment} from '../environments/environment';
import {ApiService} from './core/services/api.service';
import {NavigationEnd, NavigationStart, Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <a class="nav-link" routerLink="/module">Home</a>
    <button class="content-center" (click)="callApi()">Click</button>
    <app-loader class="fixed top-0 right-0 left-0" [state]="loadingState"></app-loader>
    <app-version></app-version>
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
    public api: ApiService,
    public router: Router
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

    // Check when navigation Start and End
    // To show the loading based on the configuration
    this.router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof NavigationStart) {
          this.loadingState = {...this.loadingState, isLoading: true, topLoading: true};
        } else if (event instanceof NavigationEnd) {
          this.loadingState = {...this.loadingState, isLoading: false, topLoading: false};
        }
      }
    );
  }

  callApi() {
    this.api.getInfo().pipe(tap((val: any) => {
      console.log();
    })).subscribe();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
