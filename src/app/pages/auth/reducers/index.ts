import { ActionReducerMap, ActionReducer, createFeatureSelector, createSelector, createReducer, on } from "@ngrx/store";
import { User } from "app/models/user.interface";
import { AuthActions } from "../actions/auth-actions.types";

export interface AuthState {
  user: User
}
export const initialAuthState: AuthState = {
  user: undefined
}


export const authReducer = createReducer(
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

