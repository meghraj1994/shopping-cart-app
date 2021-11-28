import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown-component';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import './header-style.scss';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact  ">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

//currenct state is rootredux , user and cart are from rootReducer
//inside currentUSer = (user from rootReducer and user=coming from userReducer
// and userReducer is connected to useraction and userActiona and UserReducer is
// connected to userActionType)
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
