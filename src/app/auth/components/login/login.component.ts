import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {finalize} from 'rxjs/operators';

import {environment} from '@env/environment';
import {AuthenticationService} from '@app/auth/services/authentication.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Logger} from '@app/core/logger/logger.service';
import {LoadingState} from '@app/shared/models/loading-app';

const log = new Logger('Login');

@UntilDestroy()
@Component({
  selector: 'app-login',
  template: `
    <!-- GitHub Badge -->
    <div
      class="absolute right-0 mt-20 -mr-8 flex w-36 rotate-45 items-center justify-center bg-gray-50 opacity-90"
      [class.hidden]="hideGitHub"
      (click)="hideGitHub = !hideGitHub">
      <a
        class="flex"
        href="https://github.com/Alessandroinfo/angular-boilerplate"
        target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        GitHub
      </a>
    </div>

    <app-loader [state]="loadingState"></app-loader>

    <div
      class="flex h-screen w-screen flex-col items-center justify-center bg-gray-100">
      <div class="w-1/2">
        <mat-card>
          <form (ngSubmit)="login()" [formGroup]="loginForm" novalidate>
            <div [hidden]="!error || loadingState.isLoading" translate>
              Username or password incorrect.
            </div>

            <br />

            <div class="flex flex-col">
              <h1 class="mb-5 self-center">Angular-Boilerplate</h1>

              <mat-form-field [hideRequiredMarker]="true">
                <input
                  type="text"
                  matInput
                  formControlName="username"
                  autocomplete="username"
                  [placeholder]="'Username'"
                  required />
                <mat-error
                  *ngIf="
                    loginForm.controls['username'].invalid &&
                    loginForm.controls['username'].touched
                  ">
                  <span translate>Username is required</span>
                </mat-error>
              </mat-form-field>
              <mat-form-field [hideRequiredMarker]="true">
                <input
                  type="password"
                  matInput
                  formControlName="password"
                  autocomplete="current-password"
                  [placeholder]="'Password'"
                  required />
                <mat-error
                  *ngIf="
                    loginForm.controls['password'].invalid &&
                    loginForm.controls['password'].touched
                  ">
                  <span translate>Password is required</span>
                </mat-error>
              </mat-form-field>
              <mat-slide-toggle
                class="mt-2"
                color="primary"
                formControlName="remember"
                translate>
                Remember me
              </mat-slide-toggle>
              <br />
              <button
                mat-raised-button
                color="primary"
                type="submit"
                [disabled]="loginForm.invalid || loadingState.isLoading">
                <span translate>Login</span>
              </button>
            </div>
          </form>
        </mat-card>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // Only for GitHub link
  hideGitHub = false;

  loadingState: LoadingState = {
    isLoading: false,
    centerLoading: false,
    blockOverlay: false,
    topLoading: false,
  };
  version: string | null = environment.appVersion;
  error: string | undefined;
  loginForm!: UntypedFormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  login() {
    this.loadingState = {
      isLoading: true,
      centerLoading: true,
      blockOverlay: true,
    };

    const login$ = this.authenticationService.login(this.loginForm.value);
    login$
      .pipe(
        finalize(() => {
          this.loginForm.markAsPristine();
          this.loadingState = {
            isLoading: false,
            centerLoading: false,
            blockOverlay: false,
            topLoading: false,
          };
        }),
        untilDestroyed(this)
      )
      .subscribe({
        next: (credentials) => {
          log.debug(`${credentials.username} successfully logged in`);
          this.router.navigate(
            [this.route.snapshot.queryParams['redirect'] || '/'],
            {replaceUrl: true}
          );
        },
        error: (error) => {
          log.debug(`Login error: ${error}`);
          this.error = error;
        },
      });
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });
  }
}
