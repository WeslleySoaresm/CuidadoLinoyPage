import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Planos } from './pages/Planos';
import { SejaCuidadora } from './pages/SejaCuidadora';
import { Footer } from './components/Footer'; 
import { WhatsAppButton } from './components/WhatsAppButton';
import { Metodologia } from './pages/Metodologia';
import { Navbar } from './components/NavBar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        
        {/* O padding-top (pt) aqui é crucial porque a Navbar é fixed */}
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