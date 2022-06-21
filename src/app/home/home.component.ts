import { Component, OnInit } from "@angular/core";
import { tap } from "rxjs/operators";
import { ApiService } from "@app/core/api/api.service";

declare const TEST_WEBPACK: string;

@Component({
  selector: "app-home",
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
      class="w-128 h-128 flex bg-gray-300 child:text-yellow">
      Main content

      <div [appOutline]="{
    style: 'dashed',
    color: '#ff00006b',
    size: '1px',
  }">CHILD
      </div>
      <div [appBoxLine]="{
    border: {
      style: 'solid',
      color: 'blue',
      size: '2px',
    },
    outline: {
      style: 'dashed',
      color: 'red',
      size: '2px',
    },
  }">CHILD</div>

    </div>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  test_webpack: string = "";
  constructor(public api: ApiService) {}

  ngOnInit(): void {}

  callApi() {
    this.test_webpack = TEST_WEBPACK;
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
