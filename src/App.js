import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contato from './pages/Contato';
import Fornecedores from './pages/Fornecedores';
import QuemSomos from './pages/QuemSomos'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/fornecedores" element={<Fornecedores />} />
          <Route path="/quemSomos" element={<QuemSomos />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;