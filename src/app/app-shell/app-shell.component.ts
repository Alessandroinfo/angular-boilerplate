import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-shell',
  template: `
    <p>
      app-shell works!
    </p>
  `,
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
