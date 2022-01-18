import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

// CSS
import './Crew.css';

const Crew = () => {
 return (
  <div className='crew'>
   <div className="crew__container w-full">
    <Navbar />
    <Outlet />
   </div>
  </div>
 );
};

export default Crew;
