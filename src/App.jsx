
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InfoSeguros from './pages/InfoSeguros';
import Cotizar from './pages/Cotizar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InfoSeguros />} />
        <Route path="/cotizar" element={<Cotizar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;