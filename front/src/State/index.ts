import { combineReducers } from 'redux';
import user from './userReducer/userReducer';
import store from './store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const rootReducer = combineReducers({
  user,
});
export default rootReducer;

export type StateReduxType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<StateReduxType> = useSelector;
export type AppDispatch = typeof store.dispatch;
