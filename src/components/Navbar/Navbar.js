import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/imgs/shared/logo.png";
import hamburgerNav from "../../assets/imgs/shared/icon-hamburger.svg";

const Navbar = () => {
 return (
  <nav className='navbar w-full mt-8 mb-8 md:mt-0 lg:mt-8'>
   <div className="navbar__container flex flex-row justify-between items-center w-full">
    <div className="nav__left w-[48] pl-9">
     <img src={logo} alt="the space app logo" />
    </div>
    <div className="nav__right flex w[900px] pr-9 md:pt-7 md:pb-7 md:pl-[20px] md:pr-[20px] text-white p-3 md:backdrop-blur-lg">
     <div className="nav__links hidden md:block">
      <Link className='pl-6 pr-6 font-barlow tracking-[2.75px]' to="/"><span className='hidden lg:inline-block'>00</span> Home</Link>
      <Link className='pl-6 pr-6 font-barlow tracking-[2.75px]' to="/destination"><span className='hidden lg:inline-block'>01</span> Destination</Link>
      <Link className='pl-6 pr-6 font-barlow tracking-[2.75px]' to="/crew"><span className='hidden lg:inline-block'>02</span> Crew</Link>
      <Link className='pl-6 pr-6 font-barlow tracking-[2.75px]' to="/technology"><span className='hidden lg:inline-block'>03</span> Technology</Link>
     </div>
     <div className="nav__hamburger md:hidden">
      <img src={hamburgerNav} alt="" />
     </div>
    </div>
   </div>
  </nav>
 );
};

export default Navbar;
