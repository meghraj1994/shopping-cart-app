import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage-component';

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
      <Homepage />
    </div>
  );
}
export default App;
