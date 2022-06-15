import {Component, Input} from '@angular/core';
import {LoadingState} from '@app/shared/models/loading-app';

@Component({
  selector: 'app-loader',
  template: `
    <!--  appStopPropagation is for prevent click under overlay  -->
    <ng-container
      *ngIf="state.isLoading"
      appStopPropagation>
      <!-- Progress bar -->
      <mat-progress-bar
        *ngIf="state.topLoading"
        mode="indeterminate"
        class="mat-progress-bar z-100"></mat-progress-bar>

      <!--  Overlay with center loader -->
      <div
        *ngIf="state.blockOverlay"
        class="fixed flex justify-center items-center overflow-visible m-auto top-0 bottom-0 left-0 right-0 bg-black bg-opacity-75">
        <mat-spinner
          *ngIf="state.centerLoading"
          [strokeWidth]="3"
          [diameter]="50"></mat-spinner>
      </div>
    </ng-container>
  `,
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  // CHECK IF IS IN LOADING OR NOT
  @Input() state: LoadingState = {
    isLoading: false,
    blockOverlay: false,
    centerLoading: false,
    topLoading: false,
  };

  constructor() {}
}
