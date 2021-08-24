import { async } from "q";
import axios from "./index";

export const loginUserAPI = async (email: string, password: string) => {
  const res = await axios.post("login", { email, password });
  return res.data;
};

export const registerUserAPI = async (
  email: string,
  name: string,
  password: string,
  dob: string
) => {
  const res = await axios.post("register", {
    email,
    name,
    password,
    dob: new Date(dob),
  });
  return res.data;
};

export const getUserTokenAPI = async (authToken: string) => {
  const res = await axios.get("bytoken", {
    headers: {
      authorization: authToken,
    },
  });
  return res.data;
};
