import { combineReducers } from "redux";
import user from "./userReducer/userReducer";
import book from "./bookReducer/bookReducer";
import store from "./store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({
  user,
  book,
});
export default rootReducer;

export type StateReduxType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<StateReduxType> = useSelector;
export type AppDispatch = typeof store.dispatch;
