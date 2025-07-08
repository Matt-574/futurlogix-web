import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CapacidadesPage from './pages/CapacidadesPage';
import CasosDeExitoPage from './pages/CasosDeExitoPage';
import CasoDeExitoDetailPage from './pages/CasoDeExitoDetailPage';
import MetodologiaPage from './pages/MetodologiaPage';
import VisionPage from './pages/VisionPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/capacidades" element={<CapacidadesPage />} />
            <Route path="/casos-de-exito" element={<CasosDeExitoPage />} />
            <Route path="/casos-de-exito/:slug" element={<CasoDeExitoDetailPage />} />
            <Route path="/metodologia" element={<MetodologiaPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;