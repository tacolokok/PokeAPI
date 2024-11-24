import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gen1 from './pages/Gen1';
import Gen2 from './pages/Gen2';
import Gen3 from './pages/Gen3';
import Contact from './pages/Contact';
import './index.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gen1" element={<Gen1 />} />
        <Route path="/gen2" element={<Gen2 />} />
        <Route path="/gen3" element={<Gen3 />} />
        <Route path="/contact/:name" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
