import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { AuthenticationService } from '@app/auth/services/authentication.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Logger } from '@app/core/logger/logger.service';
import { LoadingState } from '@app/shared/models/loading-app';

const log = new Logger('Login');

@UntilDestroy()
@Component({
  selector: 'app-login',
  template: `
    <app-loader [state]="loadingState"></app-loader>

    <div
      class="flex flex-col bg-gray-100 items-center justify-center w-screen h-screen">
      <div class="w-1/2">
        <mat-card>
          <form
            (ngSubmit)="login()"
            [formGroup]="loginForm"
            novalidate>
            <div
              [hidden]="!error || loadingState.isLoading"
              translate>
              Username or password incorrect.
            </div>

            <br />

            <div class="flex flex-col">
              <h1 class="self-center mb-5">AngularBoilerplate</h1>

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
    login$.pipe(
      finalize(() => {
        this.loginForm.markAsPristine();
        this.loadingState = {
          isLoading: false,
          centerLoading: false,
          blockOverlay: false,
          topLoading: false
        };
      }),
      untilDestroyed(this)
    ).subscribe({
      next: (credentials) => {
        log.debug(`${credentials.username} successfully logged in`);
        this.router.navigate(
          [this.route.snapshot.queryParams['redirect'] || '/'],
          { replaceUrl: true }
        );
      },
      error: (error) => {
        log.debug(`Login error: ${error}`);
        this.error = error;
      }
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
