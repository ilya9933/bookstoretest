import { actions } from "./constUser";

export interface DataUser {
  id: number;
  name: string;
  dob: Date;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

interface UserState {
  data?: DataUser;
  loading: boolean;
  error: null | boolean;
}

interface actionUser {
  type: string;
  payload?: any;
}

const defaultState: UserState = {
  loading: false,
  error: null,
};
const user = (state = defaultState, action: actionUser): UserState => {
  switch (action.type) {
    case actions.LOGIN_USER:
      return {
        ...state,
        data: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default user;
