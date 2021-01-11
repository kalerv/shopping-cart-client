import { ActionReducerMap, ActionReducer, createFeatureSelector, createSelector, createReducer, on } from "@ngrx/store";
import { User } from "app/models/user.interface";
import { AuthActions } from "../actions/auth-actions.types";

export interface AuthState {
  user: User
}
export const initialAuthState: AuthState = {
  user: undefined
}


const _authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginSuccess, (state, action) => {
    return { user: action.user }
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined
    }
  })
)

export function authReducer (state, action) {
  return _authReducer(state, action);
}

