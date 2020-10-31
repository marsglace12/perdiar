import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { environment } from 'environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AuthService } from './services/auth.service'
import { StoreModule } from '@ngrx/store';
import { authenticationReducer } from './reducers/auth.reducers'
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';

@NgModule({
  declarations: [LoginContainerComponent, LoginFormComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfiguration),
    StoreModule.forFeature('auth', authenticationReducer),
    EffectsModule.forFeature([AuthEffects]),
    AngularFireAuthModule,
  ],
  providers: [AuthService]
})
export class LoginModule { }