import { useState } from 'react';
import { LeadForm } from '../components/LeadForm';
import { Check } from 'lucide-react';

export function Planos() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: 'Básico',
      price: 'R$ 45/hora',
      description: 'Ideal para companhia e auxílio em tarefas leves.',
      features: ['Companhia diurna', 'Auxílio em refeições', 'Lembrete de remédios', 'Mínimo de 4h/dia'],
      color: 'blue'
    },
    {
      name: 'Premium',
      price: 'R$ 60/hora',
      description: 'Cuidado completo para idosos com limitações.',
      features: ['Tudo do Básico', 'Auxílio no banho', 'Troca de fraldas', 'Acompanhamento médico'],
      highlight: true,
      color: 'blue'
    },
    {
      name: '24 Horas',
      price: 'Sob Consulta',
      description: 'Segurança total com cuidadores em sistema de escala.',
      features: ['Monitoramento 24h', 'Relatórios diários', 'Suporte emergencial', 'Escala de cuidadores'],
      color: 'blue'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossos Planos de Cuidado</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha a modalidade que melhor se adapta às necessidades da sua família.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all hover:scale-105 ${plan.highlight ? 'border-blue-600' : 'border-transparent'}`}
            >
              {plan.highlight && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-bold uppercase">
                  Mais Escolhido
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-6 h-12">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-600">
                      <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => {
                    setSelectedPlan(plan.name);
                    window.scrollTo({ top: document.getElementById('contato-planos')?.offsetTop, behavior: 'smooth' });
                  }}
                  className={`w-full py-3 rounded-lg font-bold transition-colors ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  Selecionar {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Contato condicional */}
        <div id="contato-planos" className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-blue-600 p-10 text-white md:w-1/3 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">
              {selectedPlan ? `Interesse no Plano ${selectedPlan}` : 'Fale com um Especialista'}
            </h3>
            <p className="text-blue-100">
              Preencha os dados e um de nossos coordenadores ligará para você em menos de 2 horas.
            </p>
          </div>
          <div className="p-10 md:w-2/3">
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
}