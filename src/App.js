import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user-redux/user-actions';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './component/header/header-component';
import Homepage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop-component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  //these codes for when firebse changes state
  //since below is open substription we need to close it or unmount it
  unsubscribeFromAuth = null;

  //onAuthStatechanged() is method on auth library
  //this is open source subscription(open messaging s/m) between firebase and our app
  // if there any changes in firebase state related to this app like user is signIn/signOut with google or
  //userName password then firebase sends message here saying authState has been changed or
  //user has updated then we get new user and it be added to currentUser
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //if user is login get userRef
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //listen if there is any state change
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      //if user is logout set current user to null because if there is not user userAuth will be null and set it to current user
      setCurrentUser(userAuth);
    });
  }

  //closing subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            extact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

//this code is prevent user to see signIn page if already signed it
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

//dispatch to userRedux
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
