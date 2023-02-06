import {Component, OnInit} from '@angular/core';
import {tap} from 'rxjs/operators';
import {ApiService} from '@app/core/api/api.service';
import {Logger} from '@app/core/logger/logger.service';

const log = new Logger('App');
declare const APP_VERSION: string;

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h1>Material buttons</h1>

      <div class="example-label">Basic</div>
      <div class="example-button-row">
        <button mat-button>Basic</button>
        <button mat-button mat-c color="primary">Primary</button>
        <button mat-button color="accent">Accent</button>
        <button mat-button color="warn">Warn</button>
        <button mat-button disabled>Disabled</button>
        <a mat-button href="https://www.google.com/" target="_blank">Link</a>
      </div>

      <mat-divider></mat-divider>

      <div class="example-label">Raised</div>
      <div class="example-button-row">
        <button mat-raised-button>Basic</button>
        <button mat-raised-button color="primary">Primary</button>
        <button mat-raised-button color="accent">Accent</button>
        <button mat-raised-button color="warn">Warn</button>
        <button mat-raised-button disabled>Disabled</button>
        <a mat-raised-button href="https://www.google.com/" target="_blank">
          Link
        </a>
      </div>
    </div>
    <br />

    <button mat-raised-button routerLink="/home" color="primary">HOME</button>

    <button mat-raised-button routerLink="/about" color="primary">ABOUT</button>

    <button mat-raised-button (click)="callApi()" color="primary">
      Call API
    </button>

    <div
      id="main-content"
      class="w-128 h-128 flex bg-gray-300 child:text-white">
      Main content

      <div
        [appOutline]="{
          style: 'dashed',
          color: '#ff00006b',
          size: '1px'
        }">
        CHILD
      </div>
      <div
        [appBoxLine]="{
          border: {
            style: 'solid',
            color: 'blue',
            size: '2px'
          },
          outline: {
            style: 'dashed',
            color: 'red',
            size: '2px'
          }
        }">
        CHILD
      </div>
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
