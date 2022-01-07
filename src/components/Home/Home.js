import React from 'react';
import Navbar from '../Navbar/Navbar';
import exploreIcon from '../../assets/imgs/home/explore-button.png';

// css
import './Home.css';

const Home = () => {
 return (
  <div className='home flex flex-col justify-between items-center pt-6 pb-6 ml-auto mr-auto h-screen'>
   <Navbar />
   <div className="container flex flex-col justify-between text-center lg:text-left md:items-center lg:flex-row max-w-6xl mb-32 p-5 m-auto">
    <div className="container__left max-w-[327px] md:max-w-lg">
     <h5 className='font-barlow text-[16px] md:text-[20px] lg:text-h5 text-secondary tracking-[4.72px]'>SO, YOU WANT TO TRAVEL TO</h5>
     <h1 className='text-white text-[80px] md:text-h1'>SPACE</h1>
     <p className='text-secondary text-[15px] md:text-base lg:text-lg leading-8'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
    <div className="container__right w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px]">
     <img className='' src={exploreIcon} alt="A circle with the word explore in the center" />
    </div>
   </div>
  </div>
 );
};

export default Home;
