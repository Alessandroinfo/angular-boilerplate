import {Component} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <div class="bold select-none grid transition-all font-thin text-xs transform flex ">{{appVersion}}</div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appVersion = environment.appVersion;
}
