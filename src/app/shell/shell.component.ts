import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  constructor() {}

  @HostBinding('class') class = 'css-debug';
}
