import {Component} from '@angular/core';
import {environment} from '@env/environment';

@Component({
  selector: 'app-version',
  template: `
    <div
      class="select-none bg-gray-200 bold bottom-0 fixed font-thin px-2 right-0 text-xs">
      {{ appVersion }}
    </div>
  `,
  styleUrls: ['./version.component.scss'],
  })
export class VersionComponent {
  appVersion = environment.appVersion;
}
