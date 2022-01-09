import React from 'react';
import { Link } from 'react-router-dom';

function DestinationsNav() {
 return (
  <div>
   <Link to="/destination/moon">Moon</Link>
   <Link to="/destination/mars">Moon</Link>
   <Link to="/destination/europa">Moon</Link>
   <Link to="/destination/titan">Moon</Link>
  </div>
 );
}

export default DestinationsNav;
