import {Component, OnInit} from '@angular/core';
import {tap} from 'rxjs/operators';
import {ApiService} from '@app/core/api/api.service';
import {Logger} from '@app/core/logger/logger.service';

const log = new Logger('App');
declare const APP_VERSION: string;

@Component({
  selector: 'app-home',
  template: `
    <div class="h-full w-full bg-gray-200" id="main-content">
      <h1 class="text-3xl">Home component</h1>

      <br />
      <h1>Material buttons</h1>
      <button mat-button>Basic</button>
      <button mat-button color="primary">Primary</button>
      <button mat-button color="accent">Accent</button>
      <button mat-button color="warn">Warn</button>
      <button mat-button disabled>Disabled</button>

      <br />
      <br />
      <h1>API</h1>

      <button
        mat-raised-button
        class="text-white"
        (click)="callApi()"
        color="primary">
        Call API
      </button>

      <br />
      <br />
      <h1>Lazy loaded module</h1>
      <button mat-raised-button class="text-white" color="primary">
        About
      </button>
    </div>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  app_version = '';
  constructor(public api: ApiService) {}

  ngOnInit(): void {}

  callApi() {
    this.app_version = APP_VERSION;
    this.api
      .getInfo()
      .pipe(
        tap((val: unknown) => {
          log.info(val);
        })
      )
      .subscribe();
  }
}
