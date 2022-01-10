import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import exploreIcon from '../../assets/imgs/home/explore-button.png';

// css
import './Home.css';


const Home = () => {
 let navigate = useNavigate();

 return (
  <div className='home'>
   <Navbar />
   <div className="container">
    <div className="home__left">
     <h5 className='h5'>SO, YOU WANT TO TRAVEL TO</h5>
     <h1 className='title'>SPACE</h1>
     <p className='sub-title'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
    <div className="home__right ">
     <img onClick={() => { navigate("/destination/moon/"); }} src={exploreIcon} alt="A circle with the word explore in the center" />
    </div>
   </div>
  </div>
 );
};

export default Home;
