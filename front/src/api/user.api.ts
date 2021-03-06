import { async } from "q";
import axios from "./index";

const authRoute = "/api/auth";
export const loginUserAPI = async (email: string, password: string) => {
  const res = await axios.post(`${authRoute}/login`, { email, password });
  return res.data;
};

export const registerUserAPI = async (
  email: string,
  name: string,
  password: string,
  dob: string
) => {
  const res = await axios.post(`${authRoute}/register`, {
    email,
    name,
    password,
    dob: new Date(dob),
  });
  return res.data;
};

export const getUserTokenAPI = async (authToken: string) => {
  const res = await axios.get(`${authRoute}/bytoken`, {
    headers: {
      authorization: authToken,
    },
  });
  return res.data;
};

export const UpdateUserAPI = async (
  oldEmail: string,
  newEmail: string,
  name: string,
  oldPassword: string,
  newPassword: string,
  dob: string,
  authToken: string
) => {
  const res = await axios.post(
    `${authRoute}/update`,
    {
      oldEmail,
      newEmail,
      name,
      oldPassword,
      newPassword,
      dob,
    },
    {
      headers: {
        authorization: authToken,
      },
    }
  );
  return res.data;
};

export const AddPhotoAPI = async (file: FormData, authToken: string) => {
  // console.log("qq", image);

  const res = await axios.post(`${authRoute}/user`, file, {
    headers: {
      authorization: authToken,
    },
  });
  console.log("data", res.data);

  return res.data;
};
