import React from 'react';
import { Link } from 'react-router-dom';
import Dot from '../../../assets/imgs/circle-solid.svg';

// css
import '../Crew.css';

function CrewMembersNav() {
 return (
  <div className='crew-members text-white'>
   <div className="crew-members__links">
    <Link className='crew-members__link' to="/crew/douglas"><img className='white' src={Dot} alt="" /></Link>
    <Link className='crew-members__link' to="/crew/mark">Mars</Link>
    <Link className='crew-members__link' to="/crew/victor">Europa</Link>
    <Link className='crew-members__link' to="/crew/anousheh">Titan</Link>
   </div>
  </div>
 );
}

export default CrewMembersNav;
