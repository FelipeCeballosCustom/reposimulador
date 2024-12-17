import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InfoSeguros from './pages/InfoSeguros';
import Cotizar from './pages/Cotizar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InfoSeguros />} />
        <Route path="/cotizar" element={<Cotizar />} />
        
      </Routes>
    </Router>
  );
};

export default App;