import { Shield, Clock, Heart } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Seção Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 px-4 text-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Sua família merece o melhor cuidado.
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Cuidadores certificados, segurança total e atendimento humanizado 24h por dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <div className="flex items-center gap-2">
                 <Shield className="text-green-400" />
                 <span>Processo Seletivo Rigoroso</span>
               </div>
            </div>
          </div>
          
          {/* O FORMULÁRIO APARECE AQUI NA HERO */}
          <div id="orcamento">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Diferenciais (Simplicado) */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a Cuidar+?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Carinho e Respeito</h3>
            <p className="text-gray-600">Tratamos cada idoso como se fosse da nossa própria família.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Segurança Máxima</h3>
            <p className="text-gray-600">Monitoramento e cuidadores com antecedentes verificados.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Plantão 24h</h3>
            <p className="text-gray-600">Sempre haverá alguém disponível para cuidar de quem você ama.</p>
          </div>
        </div>
      </section>
    </div>
  );
}