import { actions } from "./constUser";

interface DataImage {
  images: string;
}
export interface DataUser {
  id: number;
  name: string;
  dob: Date;
  email: string;
  image: DataImage | null;
  createdAt: Date;
  updatedAt: Date;
}

interface UserState {
  data?: DataUser;
  auth: boolean;
  loading: boolean;
  error: null | boolean;
}

interface actionUser {
  type: string;
  payload?: any;
}

const defaultState: UserState = {
  auth: false,
  loading: false,
  error: null,
};
const user = (state = defaultState, action: actionUser): UserState => {
  switch (action.type) {
    case actions.LOGIN_USER:
      return {
        ...state,
        data: action.payload,
        auth: true,
      };
    case actions.EXIT_USER:
      return {
        ...state,
        auth: false,
      };
    case actions.ADD_IMAGE: {
      if (!state.data) {
        return state;
      }
      return {
        ...state,
        data: { ...state.data, image: { images: action.payload } },
      };
    }
    case actions.USER_LODING:
      if (state.loading) {
        return {
          ...state,
          loading: false,
        };
      } else {
        return {
          ...state,
          loading: true,
        };
      }
    case actions.ERROR_REQUEST:
      if (state.error) {
        return {
          ...state,
          error: false,
        };
      } else {
        return {
          ...state,
          error: true,
        };
      }
    default:
      return state;
  }
};

export default user;
