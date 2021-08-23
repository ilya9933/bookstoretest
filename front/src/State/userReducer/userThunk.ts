import { AppDispatch } from '..';
import { loginUserAPI } from '../../api/user.api';
import { loginUser } from './actionsUser';

export const loginUserThunk =
  (email: string, password: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const data = await loginUserAPI(email, password);
      dispatch(loginUser(data));
    } catch (error) {
      console.error(error.message);
    }
  };
