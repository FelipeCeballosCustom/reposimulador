import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InfoSeguros from './pages/InfoSeguros';
import Cotizar from './pages/Cotizar';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InfoSeguros />} />
        <Route path="/cotizar" element={<Cotizar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;