import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './components/login/login.component';
import {SharedModule} from '@app/shared/shared.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SharedModule, AuthRoutingModule],
  declarations: [LoginComponent],
  })
export class AuthModule {}
