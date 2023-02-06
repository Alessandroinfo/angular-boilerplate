import {Component, Input} from '@angular/core';
import {LoadingState} from '@app/shared/models/loading-app';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-loader',
  template: `
    <!--  appStopPropagation is for prevent click under overlay  -->
    <ng-container *ngIf="state.isLoading" appStopPropagation>
      <!-- Progress bar -->
      <mat-progress-bar
        *ngIf="state.topLoading"
        mode="indeterminate"
        [color]="color"
        class="mat-progress-bar z-100"></mat-progress-bar>

      <!--  Overlay with center loader -->
      <div
        *ngIf="state.blockOverlay"
        class="fixed top-0 bottom-0 left-0 right-0 z-100 m-auto flex items-center justify-center overflow-visible bg-black bg-opacity-75">
        <mat-spinner
          *ngIf="state.centerLoading"
          [color]="color"
          [strokeWidth]="3"
          [diameter]="50"></mat-spinner>
      </div>
    </ng-container>
  `,
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  color: ThemePalette = 'accent';

  // Check if is in loading or not
  // Also contain the configuration for the
  // loader type
  @Input() state: LoadingState = {
    isLoading: false,
    blockOverlay: false,
    centerLoading: false,
    topLoading: false,
  };

  constructor() {}
}
