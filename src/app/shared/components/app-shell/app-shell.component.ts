import {Component} from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
    <svg
      class="loader"
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      stroke="#000">
      <defs />
      <g
        fill="none"
        fill-rule="evenodd"
        stroke-width="2"
        transform="translate(1 1)">
        <circle cx="18" cy="18" r="18" stroke-opacity=".3" />
        <path d="M36 18c0-9.94-8.06-18-18-18"></path>
      </g>
    </svg>
  `,
  styleUrls: ['./app-shell.component.scss'],
  })
export class AppShellComponent {
  constructor() {}
}
