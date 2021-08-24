import { AppDispatch } from "..";
import {
  loginUserAPI,
  registerUserAPI,
  getUserTokenAPI,
} from "../../api/user.api";
import { loginUser } from "./actionsUser";

export const loginUserThunk =
  (email: string, password: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const { user, token } = await loginUserAPI(email, password);
      dispatch(loginUser(user));
      localStorage.setItem("authToken", token);
    } catch (error) {
      console.error(error.message);
    }
  };

export const registerUserThunk =
  (email: string, name: string, password: string, dob: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const { user, token } = await registerUserAPI(email, name, password, dob);
      dispatch(loginUser(user));
      localStorage.setItem("authToken", token);
    } catch (error) {
      console.error(error.message);
    }
  };

export const getUserToken =
  (authToken: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      console.log("zapros");

      const { user, token } = await getUserTokenAPI(authToken);
      console.log("user", user);

      dispatch(loginUser(user));
      localStorage.setItem("authToken", token);
    } catch (error) {
      console.error(error.message);
    }
  };
