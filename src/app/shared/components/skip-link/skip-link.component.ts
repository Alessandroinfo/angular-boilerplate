import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-skip-link',
  template: `<a class="skip-link" tabindex="0" [href]="skipLinkPath">Skip to main content</a>`,
  styleUrls: ['./skip-link.component.scss']
})
export class SkipLinkComponent implements OnInit {
  skipLinkPath: string;
  @Input() mainContentID = 'main-content';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.skipLinkPath = `${this.router.url}#${this.mainContentID}`;
  }

}
