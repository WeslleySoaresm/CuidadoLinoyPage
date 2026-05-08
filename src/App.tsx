import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Planos } from './pages/Planos';
import { SejaCuidadora } from './pages/SejaCuidadora';
import { Footer } from './components/Footer'; 
import { WhatsAppButton } from './components/WhatsAppButton';
import { Metodologia } from './pages/Metodologia';

function Navbar() {
  const location = useLocation();

  // Função auxiliar para marcar o link ativo
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo com estilo */}
        <Link to="/" className="text-2xl font-black tracking-tighter text-blue-700 hover:opacity-90 transition">
          Cuidar<span className="text-blue-400">+</span>
        </Link>
        

        {/* Links de Navegação */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 text-sm font-semibold uppercase tracking-wider">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-600 transition-colors`}
            >
              Home
            </Link>

            <Link 
              to="/metodologia" 
              className={`${isActive('/metodologia') ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-600 transition-colors`}
            >
              Metodologia
            </Link>

            <Link 
              to="/planos" 
              className={`${isActive('/planos') ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-600 transition-colors`}
            >
              Planos
            </Link>
            <Link 
              to="/seja-cuidadora" 
              className={`${isActive('/seja-cuidadora') ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-600 transition-colors`}
            >
              Trabalhe Conosco
            </Link>
          </div>

          {/* Botão de Destaque na Navbar */}
          <Link 
            to="/planos" 
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all active:scale-95"
          >
            Solicitar Orçamento
          </Link>

        </div>
        
        {/* Menu Mobile (Ícone visível apenas em telas pequenas) */}
        <div className="md:hidden">
          <button className="text-gray-600 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/metodologia" element={<Metodologia />} />
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