import { ADD_USER } from "../const";

const defaultState = {
  loading: false,
};
const user = (state = defaultState, action: any) => {
  switch (action.type) {
    case ADD_USER:
      return defaultState;
    default:
      return state;
  }
};

export default user;
