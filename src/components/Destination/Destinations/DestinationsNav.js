import React from 'react';
import { Link } from 'react-router-dom';

// css
import '../Destination.css';

function DestinationsNav() {
 return (
  <div className='destinations text-white'>
   <div className="destinations__links">
    <Link className='destinations__link' to="/destination/moon">Moon</Link>
    <Link className='destinations__link' to="/destination/mars">Mars</Link>
    <Link className='destinations__link' to="/destination/europa">Europa</Link>
    <Link className='destinations__link' to="/destination/titan">Titan</Link>
   </div>
  </div>
 );
}

export default DestinationsNav;
