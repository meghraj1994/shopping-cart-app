import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './component/header/header-component';
import Homepage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop-component';

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

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}
export default App;
