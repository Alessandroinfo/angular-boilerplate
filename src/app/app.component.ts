import {Component, Inject, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import {takeWhile, tap} from 'rxjs/operators';
import {GenericFacilityService} from './core/services/generic-facility.service';
import {GlobalDataService} from './core/services/global-data.service';
import {environment} from '../environments/environment';
import {ApiService} from './core/services/api.service';
import {NavigationEnd, NavigationStart, Router, RouterEvent} from '@angular/router';
import {LoadingState} from '@app/shared/models/loading-app';

@Component({
  selector: 'app-root',
  template: `
    <p>{{12059964 | filesize}}
      <span matBadge="4" matBadgeOverlap="false">Text with a badge</span>
    </p>

    <p>
      <span appOl matBadge="1" matBadgeSize="large">Text with large badge</span>
    </p>

    <p>
      Button with a badge on the left
      <button
        mat-raised-button
        color="primary"
        matBadge="8"
        matBadgePosition="before"
        matBadgeColor="accent"
      >
        Action
      </button>
    </p>

    <p>
      Button toggles badge visibility
      <button
        mat-raised-button
        matBadge="7"
        [matBadgeHidden]="hidden"
        (click)="toggleBadgeVisibility()"
      >
        Hide
      </button>
    </p>

    <p>
      Icon with a badge
      <mat-icon matBadge="15" matBadgeColor="warn">home</mat-icon>
      <!-- Include text description of the icon's meaning for screen-readers -->
      <span class="cdk-visually-hidden">
        Example with a home icon with overlaid badge showing the number 15
      </span>
    </p>
    <section>
      <div class="example-label">Basic</div>
      <div class="example-button-row">
        <button mat-button>Basic</button>
        <button mat-button color="primary">Primary</button>
        <button mat-button color="accent">Accent</button>
        <button mat-button color="warn">Warn</button>
        <button mat-button disabled>Disabled</button>
        <a rel="noopener" mat-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Raised</div>
      <div class="example-button-row">
        <button mat-raised-button>Basic</button>
        <button mat-raised-button color="primary">Primary</button>
        <button mat-raised-button color="accent">Accent</button>
        <button mat-raised-button color="warn">Warn</button>
        <button mat-raised-button disabled>Disabled</button>
        <a rel="noopener" mat-raised-button href="https://www.google.com/" target="_blank"
        >Link</a
        >
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Stroked</div>
      <div class="example-button-row">
        <button mat-stroked-button>Basic</button>
        <button mat-stroked-button color="primary">Primary</button>
        <button mat-stroked-button color="accent">Accent</button>
        <button mat-stroked-button color="warn">Warn</button>
        <button mat-stroked-button disabled>Disabled</button>
        <a rel="noopener" mat-stroked-button href="https://www.google.com/" target="_blank"
        >Link</a
        >
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Flat</div>
      <div class="example-button-row">
        <button mat-flat-button>Basic</button>
        <button class="bg" mat-flat-button color="primary">Primary</button>
        <button mat-flat-button color="accent">Accent</button>
        <button mat-flat-button color="warn">Warn</button>
        <button mat-flat-button disabled>Disabled</button>
        <a rel="noopener" mat-flat-button href="https://www.google.com/" target="_blank"
        >Link</a
        >
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Icon</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <button
            mat-icon-button
            aria-label="Example icon button with a vertical three dot icon"
          >
            <mat-icon>more_vert</mat-icon>
          </button>
          <button
            mat-icon-button
            color="primary"
            aria-label="Example icon button with a home icon"
          >
            <mat-icon>home</mat-icon>
          </button>
          <button
            mat-icon-button
            color="accent"
            aria-label="Example icon button with a menu icon"
          >
            <mat-icon>menu</mat-icon>
          </button>
          <button
            mat-icon-button
            color="warn"
            aria-label="Example icon button with a heart icon"
          >
            <mat-icon>favorite</mat-icon>
          </button>
          <button
            mat-icon-button
            disabled
            aria-label="Example icon button with a open in new tab icon"
          >
            <mat-icon>open_in_new</mat-icon>
          </button>
        </div>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">FAB</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <div class="example-button-container">
            <button
              mat-fab
              color="primary"
              aria-label="Example icon button with a delete icon"
            >
              <mat-icon>delete</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button
              mat-fab
              color="accent"
              aria-label="Example icon button with a bookmark icon"
            >
              <mat-icon>&#xE0DA;</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button
              mat-fab
              color="warn"
              aria-label="Example icon button with a home icon"
            >
              <mat-icon>home</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button
              mat-fab
              disabled
              aria-label="Example icon button with a heart icon"
            >
              <mat-icon>favorite</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Mini FAB</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <div class="example-button-container">
            <button
              mat-mini-fab
              color="primary"
              aria-label="Example icon button with a menu icon"
            >
              <mat-icon>menu</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button
              mat-mini-fab
              color="accent"
              aria-label="Example icon button with a plus one icon"
            >
              <mat-icon>plus_one</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button
              mat-mini-fab
              color="warn"
              aria-label="Example icon button with a filter list icon"
            >
              <mat-icon>filter_list</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button
              mat-mini-fab
              disabled
              aria-label="Example icon button with a home icon"
            >
              <mat-icon>home</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
    <a class="nav-link" routerLink="/module">Home</a>
    <button class="content-center" (click)="callApi()">Click</button>
    <app-loader
      class="fixed top-0 right-0 left-0"
      [state]="loadingState"
    ></app-loader>
    <app-version></app-version>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  // FLAG FOR COMPLETE, UNSUBSCRIBE OBSERVABLES
  alive = true;

  // FOR LOADING STATUS DEFAULT FALSE ALL
  loadingState: LoadingState = this.gcdSvc.LoadingDefaultOffState;
  hidden = false;

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

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  ngOnInit(): void {
    // PIPE FOR GET ISLOADING STATUS
    this.gcfSvc
      .getLoadingState()
      .pipe(
        takeWhile(() => this.alive),
        tap((state) => {
          this.loadingState = state;
        })
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

  callApi() {
    this.api
      .getInfo()
      .pipe(
        tap((val: any) => {
          console.log();
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
