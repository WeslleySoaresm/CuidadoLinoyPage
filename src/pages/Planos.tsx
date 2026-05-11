import { useState } from 'react';
import { LeadForm } from '../components/LeadForm';
import { Check,  Info, Sparkles, ShieldCheck, Clock } from 'lucide-react';

export function Planos() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: 'Essencial',
      price: '25',
      unit: '€ /hora',
      description: 'Assistência focada em autonomia e suporte em rotinas domésticas leves.',
      features: ['Acompanhamento Social', 'Gestão de Refeições', 'Controlo de Medicação', 'Mínimo de 4h/sessão'],
      highlight: false
    },
    {
      name: 'Executivo',
      price: '30',
      unit: '€ Apartir',
      description: 'Cuidado técnico especializado para idosos com necessidades de auxílio físico.',
      features: ['Higiene e Conforto', 'Auxílio na Mobilidade', 'Acompanhamento Médico', 'Relatórios por Turno'],
      highlight: true
    },
    {
      name: 'Privativo 24h',
      price: 'Sob',
      unit: 'Consulta',
      description: 'Apoio domiciliário permanente com equipa dedicada em regime de rotatividade.',
      features: ['Vigilância Contínua', 'Enfermagem sob Demanda', 'Gestão de Crises', 'Equipa Multidisciplinar'],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-32">
      {/* HEADER EDITORIAL */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent -z-10"></div>
        
        <div className="container mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm border border-gray-100 mb-8">
            <Sparkles size={14} className="text-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Investimento em Bem-Estar</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
            Níveis de <br/> <span className="italic font-serif font-light text-blue-600">Assistência.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
            Transparência total e flexibilidade absoluta para desenhar o plano que melhor se adapta à dinâmica da sua família.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* GRID DE PLANOS */}
        <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-32">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`group relative bg-white rounded-[3.5rem] transition-all duration-700 ${
                plan.highlight 
                ? 'shadow-[0_40px_80px_rgba(37,99,235,0.15)] border-2 border-blue-600 scale-105 z-10' 
                : 'shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 hover:scale-[1.02]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-8 py-2 rounded-full text-[10px] font-black tracking-[0.2em] flex items-center gap-2 shadow-xl">
                  RECOMENDADO
                </div>
              )}

              <div className="p-12">
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{plan.name}</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed h-12">
                    {plan.description}
                  </p>
                </div>
                
                <div className="mb-12 flex items-baseline gap-1">
                  <span className="text-6xl font-black text-slate-900 tracking-tighter">{plan.price}</span>
                  <span className="text-slate-400 font-bold text-xl">{plan.unit}</span>
                </div>

                <div className="space-y-6 mb-12">
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Inclusões Premium:</p>
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Check className="text-blue-600 w-3 h-3" strokeWidth={4} />
                      </div>
                      <span className="text-slate-600 text-sm font-medium tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => {
                    setSelectedPlan(plan.name);
                    const element = document.getElementById('contato-planos');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className={`w-full py-6 rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-xl ${
                    plan.highlight 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200' 
                    : 'bg-slate-950 text-white hover:bg-slate-800'
                  }`}
                >
                  Selecionar Nível {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CONTATO ESTILO CONCIERGE */}
        <div 
          id="contato-planos" 
          className="max-w-6xl mx-auto bg-white rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 flex flex-col lg:flex-row"
        >
          <div className="bg-[#050A18] p-16 text-white lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-blue-500/20">
                <Info className="text-white" />
              </div>
              <h3 className="text-4xl font-black mb-6 leading-tight tracking-tighter">
                {selectedPlan ? `Nível ${selectedPlan} selecionado.` : 'Personalize o seu plano.'}
              </h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Cada família possui uma dinâmica única. Fale com um dos nossos coordenadores de cuidado para ajustar os detalhes.
              </p>
            </div>
            
            <div className="mt-16 pt-10 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="text-blue-500" size={20} />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-300">Privacidade Garantida</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-blue-500" size={20} />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-300">Resposta em 15min</span>
              </div>
            </div>
          </div>
          
          <div className="p-16 lg:w-3/5 bg-white">
            <div className="mb-10">
                <h4 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Finalizar Pedido de Orçamento</h4>
                <p className="text-slate-500 font-light italic">Sem compromisso, com total discrição.</p>
            </div>
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
}