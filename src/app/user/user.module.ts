import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GoogleSigninDirective } from './google-signin.directive';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [LoginPageComponent, GoogleSigninDirective],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
