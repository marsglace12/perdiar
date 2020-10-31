import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { environment } from 'environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'


@NgModule({
  declarations: [LoginContainerComponent, LoginFormComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfiguration),
    AngularFireAuthModule
  ]
})
export class LoginModule { }