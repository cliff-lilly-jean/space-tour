import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';
import Moon from './components/Destination/Destinations/Moon';
import Mars from './components/Destination/Destinations/Mars';
import Europa from './components/Destination/Destinations/Europa';
import Titan from './components/Destination/Destinations/Titan';

function App() {
 return (
  <div className='font-bellefair box-border'>
   <BrowserRouter>
    <Routes>
     {/* Home */}
     <Route path="/" element={<Home />} />
     {/* Destination */}
     <Route path="/destination" element={<Destination />} >
      {/* Moon */}
      <Route path="/moon" element={<Moon />} />
      {/* Mars */}
      <Route path="/mars" element={<Mars />} />
      {/* Europa */}
      <Route path="/europa" element={<Europa />} />
      {/* Titan */}
      <Route path="/titan" element={<Titan />} />
     </Route>
     {/* Crew */}
     <Route path="/crew" element={<Crew />} />
     {/* Technology */}
     <Route path="/technology" element={<Technology />} />
    </Routes>
   </BrowserRouter>
  </div>
 );
}

export default App;
