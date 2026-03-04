import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import SurfOrSound from './SurfOrSound';
import LivingBonsai from './LivingBonsai';
import Designs from './Designs';
import Contact from './Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/surf-or-sound" element={<SurfOrSound />} />
      <Route path="/living-bonsai" element={<LivingBonsai />} />
      <Route path="/designs" element={<Designs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;