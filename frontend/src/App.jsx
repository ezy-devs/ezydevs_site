import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Protocol from './pages/Protocol';
import Platforms from './pages/Platforms';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop'; // Recommended for clean transitions
// src/App.jsx
import Partnership from './pages/Partnership';

// Inside <Routes>

function App() {
  return (
    <Router>
      {/* Ensures page starts at top when switching routes */}
      <ScrollToTop /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protocol" element={<Protocol />} />
        <Route path='/Platforms' element={<Platforms/>} />
        <Route path='/about' element={<About/>} />
        <Route path="/partnership" element={<Partnership />} />
        {/* You can add more routes here, like /lumi-id or /tersai */}
      </Routes>
    </Router>
  );
}

export default App;