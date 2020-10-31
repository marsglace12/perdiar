import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActionTypes } from 'login/actions/auth.actions';
import { AuthService } from 'login/services/auth.service';
import { State } from '../../reducers/auth.states';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private store: Store<State>, public authService: AuthService) { }

  ngOnInit(): void {
  }

  launchGoogleAuth() {
    this.store.dispatch({type: AuthActionTypes.GOOGLE_LOGIN});
  }
}
