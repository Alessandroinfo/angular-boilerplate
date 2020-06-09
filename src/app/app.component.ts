import {Component} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <div>{{appVersion}}</div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appVersion = environment.appVersion;
}
