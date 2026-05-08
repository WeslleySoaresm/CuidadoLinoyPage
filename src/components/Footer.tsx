import * as Lucide from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Função auxiliar para renderizar ícones com segurança
  const Icon = ({ name, size = 20, className = "" }: { name: string, size?: number, className?: string }) => {
    // @ts-ignore - busca o ícone pelo nome no objeto Lucide
    const LucideIcon = Lucide[name] || Lucide.HelpCircle; 
    return <LucideIcon size={size} className={className} />;
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Branding */}
          <div className="space-y-6">
            <h3 className="text-white text-3xl font-black tracking-tighter">
              Cuidar<span className="text-blue-500">+</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Líder em atendimento domiciliar humanizado em Portugal. Nossa missão é proporcionar dignidade e bem-estar no conforto do lar.
            </p>
            <div className="flex gap-4">
              <div className="p-2.5 bg-slate-900 rounded-xl hover:bg-blue-600 hover:text-white transition-all cursor-pointer group">
                <Icon name="Instagram" size={18} className="group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-2.5 bg-slate-900 rounded-xl hover:bg-blue-600 hover:text-white transition-all cursor-pointer group">
                <Icon name="Linkedin" size={18} className="group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-2.5 bg-slate-900 rounded-xl hover:bg-blue-600 hover:text-white transition-all cursor-pointer group">
                <Icon name="Facebook" size={18} className="group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navegação</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Home
                </Link>
              </li>
              <li>
                <Link to="/planos" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Nossos Planos
                </Link>
              </li>
              <li>
                <Link to="/seja-cuidadora" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contacto */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                  <Icon name="Phone" size={16} className="text-blue-500" />
                </div>
                <span>+351 966 280 773</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                  <Icon name="Mail" size={16} className="text-blue-500" />
                </div>
                <span>contato@cuidar.pt</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                  <Icon name="MapPin" size={16} className="text-blue-500" />
                </div>
                <span>Cascais - Lisboa, PT</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Horário / Urgência */}
          <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-slate-800">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <Icon name="Clock" size={18} className="text-blue-400" />
              Atendimento
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">Administrativo</p>
                <p className="text-sm font-medium">Seg a Sex, 09h às 18h</p>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-xs font-bold text-green-500 uppercase tracking-tighter">Urgências 24h</p>
                </div>
                <p className="text-sm text-slate-200 font-semibold italic">
                  Equipa técnica em plantão permanente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Créditos Finais */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium uppercase tracking-widest">
          <p>© {currentYear} Cuidar+ Unipessoal Lda. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Privacidade</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
            <a href="#" className="hover:text-white transition">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}