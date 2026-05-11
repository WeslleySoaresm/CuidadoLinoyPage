import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() =>
{
    if(isOpen){
        document.body.style.overflow = 'hidden';
    } else{ 
        document.body.style.overflow = 'unset';
    }
}, [isOpen]);
  // Efeito para mudar a navbar ao rolar a página
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu ao mudar de rota (clicar num link)
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'METODOLOGIA', path: '/metodologia' },
    { name: 'PLANOS', path: '/planos' },
    { name: 'TRABALHE CONOSCO', path: '/seja-cuidadora' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-white py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 z-[110]">
            <span className="text-[#1E4FD9] text-2xl font-black tracking-tighter uppercase">
              Cuidoo<span className="text-[#1E4FD9]">+</span>
            </span>
          </Link>

          {/* Links Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[13px] font-bold tracking-widest transition-all relative group ${
                    isActive(link.path) ? 'text-[#1E4FD9]' : 'text-slate-500 hover:text-[#1E4FD9]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#1E4FD9] transition-all ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>

            <Link
              to="/planos"
              className="bg-[#2563EB] text-white px-8 py-3.5 rounded-full text-[13px] font-extrabold uppercase tracking-widest shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
            >
              Solicitar Orçamento
            </Link>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <button 
            className="lg:hidden relative z-[110] text-slate-600 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* MENU MOBILE (Drawer) */}
      {/* Overlay escuro */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[101] transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Painel lateral */}
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white z-[105] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col p-10 pt-32 gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-bold tracking-tight border-b border-gray-50 pb-2 ${
                isActive(link.path) ? 'text-[#1E4FD9]' : 'text-slate-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            to="/planos"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-[#2563EB] text-white px-6 py-4 rounded-full text-center font-bold text-sm shadow-xl"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </>
  );
}