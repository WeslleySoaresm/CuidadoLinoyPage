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
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-bold">Cuidar<span className="text-blue-500">+</span></h3>
            <p className="text-sm">Especialistas em atendimento domiciliar humanizado.</p>
            <div className="flex gap-4">
              <Icon name="Instagram" className="hover:text-blue-500 cursor-pointer" />
              <Icon name="Share2" className="hover:text-blue-500 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/planos" className="hover:text-white transition">Planos</Link></li>
              <li><Link to="/seja-cuidadora" className="hover:text-white transition">Trabalhe Conosco</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Icon name="Phone" size={16} className="text-blue-500" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" size={16} className="text-blue-500" />
                contato@cuidar.com.br
              </li>
              <li className="flex items-center gap-3">
                <Icon name="MapPin" size={16} className="text-blue-500" />
                São Paulo, SP
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Atendimento</h4>
            <p className="text-sm">Comercial: Seg a Sex, 08h às 18h</p>
            <p className="text-sm text-green-400 font-medium italic">
              Plantão Emergencial 24h
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs">
          <p>© {currentYear} Cuidar+ Serviços de Cuidado Ltda.</p>
        </div>
      </div>
    </footer>
  );
}