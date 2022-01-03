import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Locais from './pages/Locais';
import Planos from './pages/Planos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/locais" element={<Locais />} />
        <Route exact path="/planos" element={<Planos />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
