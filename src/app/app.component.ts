import {Component} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <div
      class="px-2 bg-gray-200 absolute bottom-0 right-0 bold font-thin text-xs"
    >
      {{ appVersion }}
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appVersion = environment.appVersion;
}è
''
