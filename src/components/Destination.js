import React from 'react';
import Navbar from './Navbar';
import { pageData } from '../data/data';

const Destination = () => {
 return (
  <div className='destination'>
   <Navbar />
   <p>Destination</p>
   {/* loop through the pageData.destinations array and for each entry */}
   {/* display the name, image and description in a component Destinations */}
   <p>{pageData.destinations[0].name}</p>
   <p>{pageData.destinations[0].description}</p>
   {/* todo: find out how to  render the src tag with the pageData object data */}
   <img src={pageData.destinations[0].images.webp} alt="" />
  </div>
 );
};

export default Destination;
