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
import Douglas from './components/Crew/CrewMembers/Douglas';
import Mark from './components/Crew/CrewMembers/Mark';
import Victor from './components/Crew/CrewMembers/Victor';
import Anousheh from './components/Crew/CrewMembers/Anousheh';


function App() {
 return (
  <div className='font-bellefair box-border antialiased'>
   <BrowserRouter>
    <Routes>
     {/* Home */}
     <Route path="/" element={<Home />} />
     {/* Destination */}
     <Route path="/destination/*" element={<Destination />}>
      <Route path="moon" element={<Moon />} />
      <Route path="mars" element={<Mars />} />
      <Route path="europa" element={<Europa />} />
      <Route path="titan" element={<Titan />} />
     </Route>
     {/* Crew */}
     <Route path="/crew/*" element={<Crew />} >
      <Route path="douglas" element={<Douglas />} />
      <Route path="mark" element={<Mark />} />
      <Route path="victor" element={<Victor />} />
      <Route path="anousheh" element={<Anousheh />} />
     </Route>
     {/* Technology */}
     <Route path="/technology" element={<Technology />} />
    </Routes>
   </BrowserRouter>
  </div>
 );
}

export default App;
