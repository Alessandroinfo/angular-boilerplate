import {Component} from '@angular/core';

@Component({
  selector: 'PPP-shell',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  constructor() {}
}
