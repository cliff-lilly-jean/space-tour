import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/imgs/shared/logo.png";
import hamburgerNav from "../../assets/imgs/shared/icon-hamburger.svg";

// css
import './Navbar.css';

const Navbar = () => {

 // todo: create the hover and active states on the navbar
 return (
  <nav className='navbar'>
   <div className="navbar__container">
    <div className="navbar__left">
     <img src={logo} alt="the space app logo" />
    </div>
    <div className="navbar__right md:backdrop-blur-3xl">
     <div className="navbar__line"></div>
     <div className="navbar__links ">
      <Link className='navbar__link' to="/"><span className='navbar__link-number '>00</span> Home</Link>
      <Link className='navbar__link' to="/destination/moon/"><span className='navbar__link-number'>01</span> Destination</Link>
      <Link className='navbar__link' to="/crew"><span className='navbar__link-number'>02</span> Crew</Link>
      <Link className='navbar__link' to="/technology"><span className='navbar__link-number'>03</span> Technology</Link>
     </div>
     <div className="navbar__hamburger">
      <img src={hamburgerNav} alt="" />
     </div>
    </div>
   </div>
  </nav>
 );
};

export default Navbar;
