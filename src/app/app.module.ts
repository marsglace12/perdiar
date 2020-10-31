import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LoginModule } from 'login/login.module';
import { authenticationReducer } from '../login/reducers/auth.reducers'
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'login/effects/auth.effects';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(authenticationReducer),
    EffectsModule.forRoot([AuthEffects]),
    LoginModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
