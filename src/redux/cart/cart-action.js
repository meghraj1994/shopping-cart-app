import { cartAtionTypes } from './cart-types';

export const toggleCartHidden = () => ({
  type: cartAtionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartAtionTypes.ADD_ITEM,
  payload: item,
});
