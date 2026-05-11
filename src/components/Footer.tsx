import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock 
} from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050A18] text-slate-400 pt-20 pb-10 mt-auto border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Branding */}
          <div className="space-y-6">
            <h3 className="text-white text-3xl font-black tracking-tighter uppercase">
              Cuidar<span className="text-[#1E4FD9]">+</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-xs font-light">
              Líder em atendimento domiciliar humanizado em Portugal. Proporcionamos dignidade e o padrão ouro de saúde no conforto do lar.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-3 bg-slate-900/50 rounded-xl hover:bg-[#1E4FD9] hover:text-white transition-all duration-300 group">
                <FaInstagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 bg-slate-900/50 rounded-xl hover:bg-[#1E4FD9] hover:text-white transition-all duration-300 group">
                <FaLinkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Navegação</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/" className="hover:text-[#1E4FD9] transition-colors flex items-center gap-3 group">
                  <div className="w-1 h-1 bg-[#1E4FD9] rounded-full group-hover:w-3 transition-all"></div> Home
                </Link>
              </li>
              <li>
                <Link to="/metodologia" className="hover:text-[#1E4FD9] transition-colors flex items-center gap-3 group">
                  <div className="w-1 h-1 bg-[#1E4FD9] rounded-full group-hover:w-3 transition-all"></div> Metodologia
                </Link>
              </li>
              <li>
                <Link to="/planos" className="hover:text-[#1E4FD9] transition-colors flex items-center gap-3 group">
                  <div className="w-1 h-1 bg-[#1E4FD9] rounded-full group-hover:w-3 transition-all"></div> Nossos Planos
                </Link>
              </li>
              <li>
                <Link to="/seja-cuidadora" className="hover:text-[#1E4FD9] transition-colors flex items-center gap-3 group">
                  <div className="w-1 h-1 bg-[#1E4FD9] rounded-full group-hover:w-3 transition-all"></div> Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contacto */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Contacto Privado</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="p-2.5 bg-slate-900/50 rounded-lg group-hover:bg-[#1E4FD9]/10 transition-colors">
                  <Phone size={16} className="text-[#1E4FD9]" />
                </div>
                <span className="group-hover:text-white transition-colors">+351 966 280 773</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="p-2.5 bg-slate-900/50 rounded-lg group-hover:bg-[#1E4FD9]/10 transition-colors">
                  <Mail size={16} className="text-[#1E4FD9]" />
                </div>
                <span className="group-hover:text-white transition-colors">contato@cuidar.pt</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-slate-900/50 rounded-lg">
                  <MapPin size={16} className="text-[#1E4FD9]" />
                </div>
                <span>Cascais - Lisboa, PT</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Horário / Urgência */}
          <div className="bg-[#0A1128] p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-all"></div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-3">
              <Clock size={18} className="text-[#1E4FD9]" />
              Disponibilidade
            </h4>
            <div className="space-y-5 relative z-10">
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Escritório</p>
                <p className="text-sm font-medium text-slate-300">Seg a Sex, 09h às 18h</p>
              </div>
              <div className="pt-5 border-t border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  <p className="text-[9px] font-black text-green-500 uppercase tracking-widest">Urgências 24/7</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed italic">
                  Linha de enfermagem em plantão permanente para famílias.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Créditos Finais */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <p>© {currentYear} Cuidar+ Unipessoal Lda. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}