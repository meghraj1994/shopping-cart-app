import { combineReducers } from 'redux';

import userReducer from './user-redux/user-redux';
import CartReducer from './cart/cart-reducer';

export default combineReducers({
  user: userReducer,
  cart: CartReducer,
});
