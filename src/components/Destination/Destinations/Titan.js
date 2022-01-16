import React from 'react';
import DestinationsNav from './DestinationsNav';
import { pageData } from '../../../data/data';
import titanImage from '../../../assets/imgs/destination/image-titan.png';

// css
import '../../../App.css';

function Titan() {
 return (
  <div className='moon destination__location'>
   {/* populate this component with the data.js data pertaining to it */}
   <div className="destination__left">
    <h5 className='destination__pick-your-destination'><span className='number-span'>04</span> <span className='text-white'>PICK YOUR DESTINATION</span></h5>
    {/* the planet image */}
    <div className="planet-image">
     <img className='planet-image__img' src={titanImage} alt="" />
    </div>
   </div>
   <div className="destination__right">
    {/* the destinations nav */}
    {/* TODO: this needs to be designed */}
    <DestinationsNav />
    {/* the destination title */}
    <h1 className='destination__title'>{pageData.destinations[3].name}</h1>
    {/* the destination description */}
    <p className="destination__description">{pageData.destinations[3].description}</p>
    {/* a horizontal divider */}
    <div className="divider line"></div>
    <div className="destination__avgs ">
     {/* the avg distance */}
     <p className="destination__avgs-distance ">AVG. DISTANCE <span className="destination__avgs-distance-value ">{pageData.destinations[3].distance.toLocaleUpperCase()}</span></p>
     {/* the travel time */}
     <p className="destination__avgs-travel">EST. TRAVEL TIME<span className="destination__avgs-travel-value ">{pageData.destinations[3].travel.toLocaleUpperCase()}</span></p>
    </div>
   </div>
  </div >
 );
}

export default Titan;
