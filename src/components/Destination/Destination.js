import React from 'react';
import Navbar from '../Navbar/Navbar';
import { pageData } from '../../data/data';
import DestinationsNav from './Destinations/DestinationsNav';

// css
import './Destination.css';

const Destination = () => {
 return (
  <div className='destination'>
   <Navbar />
   {/* todo: need to use the react-router to cycle through each destination */}
   {/* on mobile, and add hover and active states. */}
   {/* Need to create a new component; DestinationNav to pull data from the data.js file, */}
   {/* and populate the destination page with the correct destination on active state */}
  </div>
 );
};

export default Destination;
