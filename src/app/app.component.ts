import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { takeWhile, tap } from 'rxjs/operators';
import { GenericFacilityService } from './core/generic-facility/generic-facility.service';
import { GlobalDataService } from './core/global-data/global-data.service';
import { environment } from '@env/environment';
import { ApiService } from './core/api/api.service';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { LoadingState } from '@app/shared/models/loading-app';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-root',
  template: `
    <app-skip-link></app-skip-link>
    <app-loader
      class="fixed top-0 right-0 left-0"
      [state]="loadingState"
    ></app-loader>
    <app-version></app-version>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // FOR LOADING STATUS DEFAULT FALSE ALL
  loadingState: LoadingState = this.gcdSvc.LoadingDefaultOffState;


  constructor(
    @Inject(LOCALE_ID) protected localeId: string,
    private gcfSvc: GenericFacilityService,
    private gcdSvc: GlobalDataService,
    public router: Router
  ) {
    // TODO REMOVE THIS, ONLY TO KNOW WHAT LANGUAGE IS
    if (!environment.production) {
      console.log(this.localeId);
    }
  }

  ngOnInit(): void {
    // PIPE FOR GET ISLOADING STATUS
    this.gcfSvc
      .getLoadingState()
      .pipe(
        tap((state) => {
          this.loadingState = state;
        }),
        untilDestroyed(this)
      )
      .subscribe();

    // Check when navigation Start and End
    // To show the loading based on the configuration
    this.router.events.subscribe((event: RouterEvent): void => {
      if (event instanceof NavigationStart) {
        this.loadingState = {
          ...this.loadingState,
          isLoading: true,
          topLoading: true
        };
      } else if (event instanceof NavigationEnd) {
        this.loadingState = {
          ...this.loadingState,
          isLoading: false,
          topLoading: false
        };
      }
    });
  }

}
