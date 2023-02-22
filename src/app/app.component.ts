import {
  Component,
  HostBinding,
  Inject,
  LOCALE_ID,
  NgZone,
  OnInit,
  Optional,
} from '@angular/core';
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
import {CSS_DEBUG} from '@app/core/tokens';

const log = new Logger('App');

@UntilDestroy()
@Component({
  selector: 'app-root',
  template: `
    <!-- GitHub Badge -->
    <div
      class="absolute right-0 mt-20 -mr-8 flex w-36 rotate-45 items-center justify-center bg-gray-50 opacity-90"
      [class.hidden]="hideGitHub"
      (click)="hideGitHub = !hideGitHub">
      <a
        class="flex"
        href="https://github.com/Alessandroinfo/angular-boilerplate"
        target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        GitHub
      </a>
    </div>

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
  // Only for GitHub link
  hideGitHub = false;

  // For loading status default false all
  loadingState: LoadingState = this.gcdSvc.loadingDefaultOffState;

  // Set the CSS Debug wireframe
  @HostBinding('class.css-debug')
  get isCssDebugEnabled(): boolean {
    if (this.cssDebug) {
      log.info('CSS Debugging its enabled in the providers on app.module.ts');
    }
    return this.cssDebug;
  }

  constructor(
    @Inject(LOCALE_ID) protected localeId: string,
    private gcfSvc: GenericFacilityService,
    private gcdSvc: GlobalDataService,
    public router: Router,
    private zone: NgZone,
    private keyboard: Keyboard,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    @Inject(DOCUMENT) private document: Document,
    @Optional() @Inject(CSS_DEBUG) private cssDebug: boolean
  ) {
    // TODO: Remove this, it's only to know what language is
    log.info(this.localeId);
  }

  ngOnInit(): void {
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
