import { async } from 'q';
import axios from './index';

export const loginUserAPI = async (email: string, password: string) => {
  const res = await axios.post('login', { email, password });
  return res.data;
};
