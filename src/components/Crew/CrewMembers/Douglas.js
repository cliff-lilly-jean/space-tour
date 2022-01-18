import React from 'react';
import CrewMembersNav from './CrewMembersNav';
import { pageData } from '../../../data/data';
import douglasImage from '../../../assets/imgs/crew/image-douglas-hurley.png';

function Douglas() {
 return (
  <div className='crew-member destination__location'>
   {/* populate this component with the data.js data pertaining to it */}
   <div className="destination__left">
    <h5 className='destination__pick-your-destination'><span className='number-span'>01</span> <span className='text-white'>MEET YOUR CREW</span></h5>
    {/* the planet image */}
    <div className="planet-image mb-0">
     <img className='planet-image__img' src={douglasImage} alt="" />
    </div>
   </div>
   {/* a horizontal divider */}
   <div className="divider line"></div>
   <div className="destination__right">
    {/* the crew nav */}
    {/* TODO: this needs to be designed */}
    <CrewMembersNav />
    {/* the destination title */}
    <p className='crew-position text-center text-white font-bold text-base opacity-25'>{pageData.crew[0].role}</p>
    <h1 className='destination__title'>{pageData.crew[0].name}</h1>
    {/* the destination description */}
    <p className="destination__description">{pageData.crew[0].bio}</p>

    <div className="destination__avgs ">
     {/* the avg distance */}
     {/* <p className="destination__avgs-distance ">AVG. DISTANCE <span className="destination__avgs-distance-value ">{pageData.crew[0].distance.toLocaleUpperCase()}</span></p> */}
     {/* the travel time */}
     {/* <p className="destination__avgs-travel">EST. TRAVEL TIME<span className="destination__avgs-travel-value ">{pageData.crew[0].travel.toLocaleUpperCase()}</span></p> */}
    </div>
   </div>
  </div >
 );
}

export default Douglas;
