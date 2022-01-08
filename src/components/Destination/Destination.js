import React from 'react';
import Navbar from '../Navbar/Navbar';
import { pageData } from '../../data/data';

// css
import './Destination.css';

const Destination = () => {
 return (
  <div className='destination flex flex-col justify-between items-center md:pt-0 ml-auto mr-auto h-screen'>
   <Navbar />

  </div>
 );
};

export default Destination;
