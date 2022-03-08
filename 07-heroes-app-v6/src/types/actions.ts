export enum ActionsTypes {
  LOGIN = '[auth] Login',
  LOGOUT = '[auth] Logout',
}

export interface AuthActions {
  type: ActionsTypes;
  payload: any;
}
