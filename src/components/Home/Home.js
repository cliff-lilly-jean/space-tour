import React from 'react';
import Navbar from '../Navbar/Navbar';

// css
import './Home.css';

const Home = () => {
 return (
  <div className='home flex flex-col justify-center items-center ml-auto mr-auto h-screen'>
   <Navbar />
   <div className="container flex max-w-6xl mb-32 justify-between p-5 m-auto">
    <div className="container__left max-w-lg">
     <h5 className='font-barlow text-h5 text-secondary'>SO, YOU WANT TO TRAVEL TO</h5>
     <h1 className='text-white text-h1'>SPACE</h1>
     <p className='text-secondary text-lg leading-8'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
    <div className="container__right w-[274px] h-[274px] mt-auto">
     {/* Note: require needs to be used for local images because of webpack */}
     <img className='' src={require("../../assets/imgs/home/explore-button.png")} alt="" />
    </div>
   </div>
  </div>
 );
};

export default Home;
