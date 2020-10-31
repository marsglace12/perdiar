import { createAction, props } from '@ngrx/store';
import { User } from 'models/model';

export enum AuthActionTypes {
  LOGOUT = '[Auth] Logout',
  GOOGLE_LOGIN = '[Auth] Google Login',
  GOOGLE_LOGIN_COMPLETE = '[Auth] Google Login Success',
}

export const logoutAction = createAction(AuthActionTypes.LOGOUT);
export const loginAction = createAction(AuthActionTypes.GOOGLE_LOGIN);
export const loginCompleteAction = createAction(
  AuthActionTypes.GOOGLE_LOGIN_COMPLETE,
  props<User>()
);