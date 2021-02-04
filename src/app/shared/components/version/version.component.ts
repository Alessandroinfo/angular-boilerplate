import {Component} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-version',
  template: `
    <div
      class="bg-gray-200 bold bottom-0 fixed font-thin opacity-40 px-2 right-0 text-xs">
      {{ appVersion }}
    </div>
  `,
  styleUrls: ['./version.component.scss']
})
export class VersionComponent {
  appVersion = environment.appVersion;
}
