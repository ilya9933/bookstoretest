import { actions } from './constUser';
import { DataUser } from './userReducer';

export const addUser = () => ({
  type: actions.ADD_USER,
});

export const loginUser = (data: DataUser) => ({
  type: actions.LOGIN_USER,
  payload: data,
});
