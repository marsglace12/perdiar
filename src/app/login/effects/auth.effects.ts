import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AuthActionTypes, loginCompleteAction, logoutAction } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}
  googleAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.GOOGLE_LOGIN),
      mergeMap(() =>
        this.authService.GoogleAuth().pipe(
          map((payload) => {
            return loginCompleteAction({
              displayName: payload.user.displayName,
              email: payload.user.email,
              photoURL: payload.user.photoURL,
              uid: payload.user.uid,
              emailVerified: payload.user.emailVerified
            });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.LOGOUT),
      mergeMap(() => this.authService.logout().pipe(
        map( () => logoutAction()),
        catchError(() => EMPTY)
      ))
    )
  );
}
