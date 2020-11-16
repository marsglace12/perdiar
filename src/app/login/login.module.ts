import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { environment } from 'environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './services/auth.service'
import { StoreModule } from '@ngrx/store';
import { authenticationReducer } from './reducers/auth.reducers'
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [LoginContainerComponent, LoginFormComponent, SignUpComponent, ForgotPasswordComponent, VerifyEmailComponent, SignInComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfiguration),
    StoreModule.forFeature('auth', authenticationReducer),
    EffectsModule.forFeature([AuthEffects]),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService]
})
export class LoginModule { }