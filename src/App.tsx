import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Importações das Páginas
import { Home } from './pages/Home';
import { Planos } from './pages/Planos';
import { SejaCuidadora } from './pages/SejaCuidadora';

// Importações dos Componentes
import { Footer } from './components/Footer'; 
import { WhatsAppButton } from './components/WhatsAppButton';

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">Cuidar+</Link>
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/planos" className="hover:text-blue-600 transition">Planos</Link>
          <Link to="/seja-cuidadora" className="hover:text-blue-600 transition">Trabalhe Conosco</Link>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/seja-cuidadora" element={<SejaCuidadora />} />
          </Routes>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}