import { createAction, props } from "@ngrx/store";
import { User } from "app/models/user.interface";

export const login = createAction(
  "[Login Page] User Login", props<{ user: User }>()
);

export const loginSuccess = createAction(
  "[Login Page] User Login Success", props<{ user: User }>(),
);

export const logout = createAction(
  "[Top Menu] Logout"
);
