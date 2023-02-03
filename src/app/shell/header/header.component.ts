import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService, CredentialsService} from '@app/auth';

@Component({
  selector: 'app-header',
  template: `
    <div class="flex w-full bg-primary mb-2 children:p-2 children:text-white">
      <div class="flex">Angular-Boilerplate</div>
      <div class="text-secondary font-bold underline ml-auto">
        {{ username }}
      </div>
      <div class="cursor-pointer" (click)="logout()">Logout</div>
    </div>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService
  ) {}

  logout() {
    this.authenticationService
      .logout()
      .subscribe(() => this.router.navigate(['/login'], {replaceUrl: true}));
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }
}
