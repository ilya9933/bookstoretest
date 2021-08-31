import { AppDispatch } from "..";
import {
  loginUserAPI,
  registerUserAPI,
  getUserTokenAPI,
  UpdateUserAPI,
  AddPhotoAPI,
} from "../../api/user.api";
import { addImage, loginUser, userLoding } from "./actionsUser";

export const loginUserThunk =
  (email: string, password: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const { user, token } = await loginUserAPI(email, password);

      dispatch(loginUser(user));
      localStorage.setItem("authToken", token);
      dispatch(userLoding());
    } catch (error) {
      alert("Wrong data");
      console.error(error.message);
      dispatch(userLoding());
    }
  };

export const registerUserThunk =
  (email: string, name: string, password: string, dob: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const { user, authToken } = await registerUserAPI(
        email,
        name,
        password,
        dob
      );
      dispatch(loginUser(user));
      localStorage.setItem("authToken", authToken);
      dispatch(userLoding());
    } catch (error) {
      console.error(error.message);
      alert("An error has occurred");
      dispatch(userLoding());
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

export const updateUserThunk =
  (
    oldEmail: string,
    newEmail: string,
    name: string,
    oldPassword: string,
    newPassword: string,
    dob: string,
    authToken: string
  ) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const { user, token } = await UpdateUserAPI(
        oldEmail,
        newEmail,
        name,
        oldPassword,
        newPassword,
        dob,
        authToken
      );
      dispatch(loginUser(user));
      localStorage.setItem("authToken", token);
    } catch (error) {
      console.error(error.message);
    }
  };

// export const deleteUserThunk =
//   (
//     email: string,
//     name: string,
//     password: string,
//     dob: string,
//     authToken: string
//   ) =>
//   async (dispatch: AppDispatch): Promise<void> => {
//     try {
//       const { user, token } = await UpdateUserAPI(
//         email,
//         name,
//         password,
//         dob,
//         authToken, image
//       );
//       dispatch(loginUser(user));
//       localStorage.setItem("authToken", token);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

export const addPictureThunk =
  (formData: FormData, authToken: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      console.log("imag", formData);
      const { path } = await AddPhotoAPI(formData, authToken);

      dispatch(addImage(path));
    } catch (error) {
      console.error(error.message);
    }
  };
