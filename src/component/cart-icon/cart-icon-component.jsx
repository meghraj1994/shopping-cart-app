import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart-action';
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';

import './cart-icon-style.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon"></ShoppingIcon>
    <span className="item-count">0</span>
  </div>
);

//toggleCartHidden function is function which is defined inside cartAction
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
