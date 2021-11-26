import React from 'react';
import { Directory } from '../../component/directory/directory-component';
import './homepage-style.scss';

//not creating class functions because here we do not need state and all
const Homepage = () => (
  <div className="homepage">
    <Directory />
  </div>
);
export default Homepage;
