import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {AuthenticationService, CredentialsService} from '@app/auth';
import {MockAuthenticationService} from '@app/auth/services/authentication.service.mock';
import {MockCredentialsService} from '@app/auth/services/credentials.service.mock';

import {ShellComponent} from './shell.component';
import {HeaderComponent} from './header/header.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {provide: AuthenticationService, useClass: MockAuthenticationService},
        {provide: CredentialsService, useClass: MockCredentialsService},
      ],
      declarations: [HeaderComponent, ShellComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
