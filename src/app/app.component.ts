import {Component, Inject, LOCALE_ID, NgZone, OnInit} from '@angular/core';
import {tap} from 'rxjs/operators';
import {environment} from '@env/environment';
import {Event, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {LoadingState} from '@app/shared/models/loading-app';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {GenericFacilityService} from '@app/core/generic-facility/generic-facility.service';
import {GlobalDataService} from '@app/core/global-data/global-data.service';
import {Logger} from '@app/core/logger/logger.service';
import {StatusBar} from '@awesome-cordova-plugins/status-bar/ngx';
import {SplashScreen} from '@awesome-cordova-plugins/splash-screen/ngx';
import {Keyboard} from '@awesome-cordova-plugins/keyboard/ngx';
import {DOCUMENT} from '@angular/common';

const log = new Logger('App');

@UntilDestroy()
@Component({
  selector: 'app-root',
  template: `
    <!-- Default skip-link -->
    <app-skip-link></app-skip-link>

    <!-- App API calls loader -->
    <app-loader
      class="fixed top-0 right-0 left-0"
      [state]="loadingState"></app-loader>

    <!-- App version -->
    <app-version></app-version>

    <!-- Base router outlet -->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // For loading status default false all
  loadingState: LoadingState = this.gcdSvc.loadingDefaultOffState;

  constructor(
    @Inject(LOCALE_ID) protected localeId: string,
    private gcfSvc: GenericFacilityService,
    private gcdSvc: GlobalDataService,
    public router: Router,
    private zone: NgZone,
    private keyboard: Keyboard,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    @Inject(DOCUMENT) private document: Document
  ) {
    // TODO: Remove this, it's only to know what language is
    if (!environment.production) {
      console.log(this.localeId);
    }
  }

  ngOnInit(): void {
    // Setup logger only not production
    if (environment.production) {
      Logger.enableProductionMode();
    }

    // If you want disable log depending
    // on the environment configuration
    if (!environment.logConsole) {
      Logger.disableLog();
    }

    // Pipe for get loadingState
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
    this.router.events.subscribe({
      next: (event: Event): void => {
        if (event instanceof NavigationStart) {
          this.loadingState = {
            ...this.loadingState,
            isLoading: true,
            topLoading: true,
          };
        } else if (event instanceof NavigationEnd) {
          this.loadingState = {
            ...this.loadingState,
            isLoading: false,
            topLoading: false,
          };
        }
      },
    });

    // Cordova platform and plugins initialization
    if (!environment.cordova) {
      this.document.addEventListener(
        'deviceready',
        () => {
          this.zone.run(() => this.onCordovaReady());
        },
        false
      );
    }
  }

  // Content loaded for deviceready Cordova API
  private onCordovaReady() {
    log.debug('device ready');

    if ((window as any).cordova) {
      log.debug('Cordova init');

      this.keyboard.hideFormAccessoryBar(true);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }
  }
}
