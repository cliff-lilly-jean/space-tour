import React from 'react';
import DestinationsNav from './DestinationsNav';
import { pageData } from '../../../data/data';
import moonImage from '../../../assets/imgs/destination/image-moon.png';

// css
import '../../../App.css';

function Moon() {
 return (
  <div className='moon flex flex-col items-center m-auto pl-5 pr-5 lg:flex-row lg: lg:items-center lg:justify-between lg:max-w-7xl lg:h-full'>
   {/* populate this component with the data.js data pertaining to it */}
   <div className="destination__left">
    <h5 className='text-secondary font-barlow tracking-[2.75px] text-center text-[16px] md:text-[20px] md:text-left md:block md:m-auto lg:text-3xl lg:mb-12'><span className='number-span'>01</span> <span className='text-white'>PICK YOUR DESTINATION</span></h5>
    {/* the planet image */}
    <div className="planet-image">
     <img className='w-44 mt-3 mb-3 md:w-[200px] lg:w-[450px] lg:my-7' src={moonImage} alt="" />
    </div>
   </div>
   <div className="destination__right">
    {/* the destinations nav */}
    {/* TODO: this needs to be designed */}
    <DestinationsNav />
    {/* the destination title */}
    <h1 className='text-4xl text-white mt-3 mb-3 md:text-[80px] md:mt-10 md:mb-10 lg:text-[100px]'>{pageData.destinations[0].name}</h1>
    {/* the destination description */}
    <p className="destination-description text-center max-w-lg text-secondary text-[14px] mb-5 md:text-base lg:text-[18px] lg:text-left lg:mt-16 lg:mb-16">{pageData.destinations[0].description}</p>
    {/* a horizontal divider */}
    <div className="block m-auto mt-0 mb-3 line border-b-[.5px] w-[75%] bg-[#383B4B] opacity-25 lg:m-0 lg:w-full"></div>
    <div className="avgs md:flex md:w-96 md:justify-between md:items-center lg:mt-16">
     {/* the avg distance */}
     <p className="avg-distance text-secondary text-[12px] text-center md:text-sm">AVG. DISTANCE <span className="avg-distance__value block mt-2 mb-2 text-white text-center m-auto text-[26px] md:text-[28px] ">{pageData.destinations[0].distance.toLocaleUpperCase()}</span></p>
     {/* the travel time */}
     <p className="avg-travel text-secondary text-[12px] text-center md:text-sm">EST. TRAVEL TIME<span className="avg-travel__value block mt-2 mb-2 text-white text-center m-auto text-[26px] md:text-[28px]">{pageData.destinations[0].travel.toLocaleUpperCase()}</span></p>
    </div>
   </div>
  </div >
 );
}

export default Moon;
