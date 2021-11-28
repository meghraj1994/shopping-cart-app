import { combineReducers } from 'redux';

import userReducer from './user-redux/user-redux';

export default combineReducers({
  user: userReducer,
});
