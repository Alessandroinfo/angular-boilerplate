import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ApiService } from "@app/core/api/api.service";

@Component({
  selector: 'app-home',
  template: `
    <h1>Landmark</h1>
    <p>{{2147483648 | fileSize}}
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
    <mat-icon>code</mat-icon>
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
    <div *ngFor="let a of array(0)">o</div>
    <a class="nav-link" routerLink="/module">Home</a>
    <button id="main-content" class="content-center" (click)="callApi()">Click</button>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hidden = false;
  array = Array;

  constructor(
    public api: ApiService
  ) { }

  ngOnInit(): void {
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
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
}
