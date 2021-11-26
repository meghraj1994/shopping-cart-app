import React from 'react';

// withRouter is higher order function which takes any function(lets say A)
// as parameter and give powerfull version of same function( A ) and now A willhave
// access to match,location and history which can be used for routing
import { withRouter } from 'react-router-dom';
import './menu-item.scss';

//Menu-item component is like one thing
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  // console.log('linkUrl is' + linkUrl),
  // console.log('match url is' + match.url),
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

//note: withRouter is taking MenuItem function as parameter and now MenuItem function
// will have access to match, history and location, and these 3 contains urls parameters
// which can be used as routing
export default withRouter(MenuItem);
