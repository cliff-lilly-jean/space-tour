import React from 'react';
import Navbar from '../Navbar/Navbar';
import exploreIcon from '../../assets/imgs/home/explore-button.png';

// css
import './Home.css';

const Home = () => {
 return (
  <div className='home flex flex-col justify-between items-center md:pt-0 ml-auto mr-auto h-screen'>
   <Navbar />
   <div className="container flex flex-col justify-between h-full items-center text-center lg:text-left  lg:flex-row max-w-6xl mb-32 p-5 m-auto">
    <div className="container__left mt-20 mb-32 max-w-[327px] md:mt-0 md:mb-10 md:max-w-lg">
     <h5 className='font-barlow text-[16px] md:text-[20px] lg:text-h5 text-secondary tracking-[4.72px]'>SO, YOU WANT TO TRAVEL TO</h5>
     <h1 className='text-white text-[80px] md:text-h1'>SPACE</h1>
     <p className='text-secondary text-[15px] max-w-[380px] ml-auto mr-auto md:text-[16px] md:max-w-[24em] lg:text-lg leading-8'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
    <div className="container__right mt-0 w-[150px] md:w-[242px] lg:w-[274px]">
     <img src={exploreIcon} alt="A circle with the word explore in the center" />
    </div>
   </div>
  </div>
 );
};

export default Home;
