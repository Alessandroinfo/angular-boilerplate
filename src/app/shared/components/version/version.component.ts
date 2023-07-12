import {Component} from '@angular/core';
import {environment} from '@env/environment';

@Component({
  selector: 'app-version',
  template: `
    <div class="bold fixed bottom-0 right-0 select-none bg-gray-200 px-2 text-xs font-thin">
      {{ appVersion }}
    </div>
  `,
  styleUrls: ['./version.component.scss'],
})
export class VersionComponent {
  appVersion = environment.appVersion;
}
