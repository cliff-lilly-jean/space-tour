import React from 'react';
import { Link } from 'react-router-dom';

function DestinationsNav() {
 return (
  <div className='text-white'>
   <Link to="moon">Moon</Link>
   <Link to="mars">Mars</Link>
   <Link to="europa">Europa</Link>
   <Link to="titan">Titan</Link>
  </div>
 );
}

export default DestinationsNav;
