import {Component, OnInit} from '@angular/core';
import {tap} from 'rxjs/operators';
import {ApiService} from '@app/core/api/api.service';
import {Logger} from '@app/core/logger/logger.service';

@Component({
  selector: 'app-home',
  template: `
    <button
      mat-raised-button
      routerLink="/home"
      color="primary">
      HOME
    </button>

    <button
      mat-raised-button
      routerLink="/about"
      color="primary">
      ABOUT
    </button>

    <button
      mat-raised-button
      (click)="callApi()"
      color="primary">
      Call API
    </button>

    <div
      id="main-content"
      class="w-128 h-128 flex bg-gray-300">
      Main content
    </div>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public api: ApiService) {}

  ngOnInit(): void {}

  callApi() {
    this.api
      .getInfo()
      .pipe(
        tap((val: unknown) => {
          console.log(val);
        })
      )
      .subscribe();
  }
}
