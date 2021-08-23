import { actions } from '../userReducer/constUser';

export const addTodo = (data: string) => ({
  type: actions.ADD_USER,
});

export const loginUser = (email: string, password: string) => ({
  type: actions.LOGIN_USER,
});
