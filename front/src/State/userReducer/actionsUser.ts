import { actions } from "./constUser";
import { DataUser } from "./userReducer";

export const addUser = () => ({
  type: actions.ADD_USER,
});

export const loginUser = (data: DataUser) => ({
  type: actions.LOGIN_USER,
  payload: data,
});

export const exitUser = () => ({
  type: actions.EXIT_USER,
});

export const addImage = (path: string) => ({
  type: actions.ADD_IMAGE,
  payload: path,
});
