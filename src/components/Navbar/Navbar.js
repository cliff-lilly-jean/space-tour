import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/imgs/shared/logo.png";

const Navbar = () => {
 return (
  <nav className='navbar w-full mt-6'>
   <div className="navbar__container flex flex-col md:flex-row justify-between items-center w-full">
    <div className="nav__left w-[48] h-[48]">
     <img src={logo} alt="the space app logo" />
    </div>
    <div className="nav__right flex  w[900px] pt-6 pb-6 pl-[100px] pr-[100px] text-white p-3 backdrop-blur-md">
     <Link className='pl-6 pr-6 font-barlow tracking-[2.75px]' to="/">00 Home</Link>
     <Link className='pl-6 pr-6 font-barlow tracking-[2.75px]' to="/destination">01 Destination</Link>
     <Link className='pl-6 pr-6 font-barlow tracking-[2.75px]' to="/crew">02 Crew</Link>
     <Link className='pl-6 pr-6 font-barlow tracking-[2.75px]' to="/technology">03 Technology</Link>
    </div>
   </div>
  </nav>
 );
};

export default Navbar;
