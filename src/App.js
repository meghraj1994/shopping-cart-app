import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './component/header/header-component';
import Homepage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop-component';

import { auth } from './firebase/firebase.utils';

//testing purpose to check history,location and match
// const TestPage = (props) => (
//   console.log('available props for the page are :'),
//   console.log(props),
//   (
//     <div>
//       <h1>This is test pages</h1>
//     </div>
//   )
// );

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  //these codes for when firebse changes state
  //since below is open substription we need to close it or unmount it
  unsubscribeFromAuth = null;

  //onAuthStatechanged() is method on auth library
  //this is open source subscription(open messaging s/m) between firebase and our app
  // if there any changes in firebase state related to this app like user is signIn/signOut with google or
  //userName password then firebase sends message here saying authState has been changed or
  //user has updated then we get new user and it be added to currentUser
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      //check this in console untill user signout we can see user details
      console.log(user);
    });
  }

  //closing subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
