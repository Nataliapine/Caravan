import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Locais from './pages/Locais';
import Planos from './pages/Planos';
import Contato from './pages/Contato';
import Inscreva from './pages/Inscreva';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/locais" element={<Locais />} />
        <Route exact path="/planos" element={<Planos />} />
        <Route exact path="/contato" element={<Contato />} />
        <Route exact path="/inscricao" element={<Inscreva />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
