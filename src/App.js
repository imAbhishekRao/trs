
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/HomePage';
import Catalouge from './components/Catalouge';
import  VerticalBalancingMachine from './components/VerticalBalancingMachine';
import UTM from './components/UniversalTestingMachine';
import PolishingMachines from './components/PolishingMachines';
import HardnessTestingMachines from './components/HardnessTesting';
import ImpactTestingMachines from './components/impacttesting';
import Ndt from './components/ndt';
import Extensometer from './components/extensometer';
import Visual from './components/visual';
import Cutter from './components/cutter';
import FlawDetectorProduct from './components/flawdetector';
import HorizontalBalancingMachine from './components/horizontal';
import AboutUS from './components/AboutUs';
import ContactUs from './components/ContactUS';
import Clients from './components/Client';
function App() {
  return (
    <Router>
    <div>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/catalouge' element={<Catalouge />} />
    <Route path='/vertical-balancing-machine' element={<VerticalBalancingMachine />} />
    <Route path='/utm' element={<UTM />} />
    <Route path='/polishingmachines' element={<PolishingMachines />} />
    <Route path='/hardnesstestingmachines' element={<HardnessTestingMachines />} />
    <Route path='/impacttestingmachines' element={<ImpactTestingMachines />} />
    <Route path='/ndtmagnetic' element={<Ndt />} />
    <Route path='/extensometers' element={<Extensometer />} />
    <Route path='/metallurgicalmicroscope' element={<Visual/>} />
    <Route path='/samplecuttingmachines' element={<Cutter />} />
    <Route path='/flowdetection' element={<FlawDetectorProduct />} />
    <Route path='/horizontal-balancing-machine' element={<HorizontalBalancingMachine />} />
    <Route path='/about' element={<AboutUS />} />
    <Route path='/contact' element={<ContactUs />} />
    <Route path='/client' element={<Clients/>}/>      
     </Routes>
    </div>
    </Router>
  );
}

export default App;
