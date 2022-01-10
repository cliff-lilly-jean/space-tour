import React from 'react';
import DestinationsNav from './DestinationsNav';
import { pageData } from '../../../data/data';
import marsImage from '../../../assets/imgs/destination/image-mars.png';

// css
import '../../../App.css';

function Mars() {
 return (
  <div className='mars flex flex-col items-center m-auto pl-5 pr-5'>
   {/* populate this component with the data.js data pertaining to it */}
   <h5 className='text-secondary font-barlow tracking-[2.75px] text-center text-[16px]'><span className='number-span'>02</span> <span className='text-white'>PICK YOUR DESTINATION</span></h5>
   {/* the planet image */}
   <div className="planet-image">
    <img className='w-44 mt-3 mb-3' src={marsImage} alt="" />
   </div>
   {/* the destinations nav */}
   {/* TODO: this needs to be designed */}
   <DestinationsNav />
   {/* the destination title */}
   <h1 className='text-4xl text-white mt-3 mb-3'>{pageData.destinations[1].name}</h1>
   {/* the destination description */}
   <p className="destination-description text-center max-w-lg text-secondary text-[14px] mb-5">{pageData.destinations[1].description}</p>
   {/* a horizontal divider */}
   <div className="block m-auto mt-0 mb-3 line border-b-[.5px] w-[75%] bg-[#383B4B] opacity-25"></div>
   {/* the avg distance */}
   <p className="avg-distance text-secondary text-[12px] text-center">AVG. DISTANCE <span className="avg-distance__value block mt-2 mb-2 text-white text-center m-auto text-[26px]">{pageData.destinations[1].distance}</span></p>
   {/* the travel time */}
   <p className="avg-travel text-secondary text-[12px] text-center">EST. TRAVEL TIME<span className="avg-travel__value block mt-2 mb-2 text-white text-center m-auto text-[26px]">{pageData.destinations[1].travel}</span></p>
  </div >
 );
}

export default Mars;
