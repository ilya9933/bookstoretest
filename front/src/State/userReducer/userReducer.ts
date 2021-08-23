import { actions } from './constUser';

export interface DataUser {
  email: string;
  password: string;
}

interface UserState {
  data: DataUser;
  loading: boolean;
  error: null | boolean;
}

interface actionUser {
  type: string;
  payload?: any;
}

const defaultState: UserState = {
  data: {
    email: '',
    password: '',
  },
  loading: false,
  error: null,
};
const user = (state = defaultState, action: actionUser): UserState => {
  switch (action.type) {
    case actions.LOGIN_USER:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default user;
