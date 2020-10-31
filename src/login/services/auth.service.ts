import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginModule } from '../login.module';
import firebase from 'firebase/app';
import { from } from 'rxjs';

@Injectable({
  providedIn: LoginModule,
})
export class AuthService {
  constructor(public auth: AngularFireAuth) {}

  // Sign in with Google
  GoogleAuth() {
    return from(
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    );
  }

  logout() {
    return from(this.auth.signOut());
  }
}
