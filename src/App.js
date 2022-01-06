import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';

function App() {
 return (
  <div className='font-bellefair box-border'>
   <BrowserRouter>
    <Routes>
     {/* Home */}
     <Route path="/" element={<Home />} />
     {/* Destination */}
     <Route path="/destination" element={<Destination />} />
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
