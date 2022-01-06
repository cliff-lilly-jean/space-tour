import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/imgs/shared/logo.png";

const Navbar = () => {
 return (
  <nav className='navbar flex justify-between w-[1385px] mt-14'>
   <div className="nav__left w-[48] h-[48]">
    <img src={logo} alt="the space app logo" />
   </div>
   <div className="nav__right flex  w[900px] text-white p-3">
    <Link to="/">Home</Link>
    <Link to="/destination">Destination</Link>
    <Link to="/crew">Crew</Link>
    <Link to="/technology">Technology</Link>
   </div>
  </nav>
 );
};

export default Navbar;
