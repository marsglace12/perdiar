import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LoginModule } from 'app/login/login.module';
import { authenticationReducer } from './login/reducers/auth.reducers'
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'app/login/effects/auth.effects';
import { AuthService } from 'app/login/services/auth.service';
import { SignUpComponent } from './home/jmartin/repo/formation/perdiar/src/app/login/components/sign-up/sign-up.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(authenticationReducer),
    EffectsModule.forRoot([AuthEffects]),
    LoginModule
    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
