import { Action, createReducer, on } from '@ngrx/store';
import { loginCompleteAction, logoutAction } from 'login/actions/auth.actions';
import { initialState, State } from './auth.states';

function handleLoginComplete(state: State, action: ReturnType<typeof loginCompleteAction>) : State {
    return {
        ...state,
        isAuthenticated: true,
        user: {email: action.email, name: action.name, picture: action.picture, uid: action.uid}
    };
}
function handleLogout(state: State, action: ReturnType<typeof logoutAction>) : State {
    return {
        ...state,
        isAuthenticated: false,
        user: null
    };
}
export const _authenticationReducer = createReducer(
    initialState,
    on(loginCompleteAction, handleLoginComplete),
    on(logoutAction, handleLogout)
);

export function authenticationReducer(
    state: State = initialState,
    action: Action,
) {
    return _authenticationReducer(state, action);
}