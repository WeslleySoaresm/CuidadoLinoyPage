import { Brain, HeartPulse, Activity, ClipboardCheck, Microscope, Info, Sparkles, Star, ShieldCheck, ChevronRight } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';

export function Metodologia() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-32 overflow-hidden">
      
      {/* 1. HERO - ELEGÂNCIA EDITORIAL */}
      <section className="relative pt-44 pb-24 px-4">
        {/* Elementos Orgânicos de Fundo */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10 opacity-70"></div>
        <div className="absolute -left-20 top-40 w-[300px] h-[300px] bg-indigo-50/50 rounded-full blur-[100px] -z-10 opacity-60"></div>

        <div className="container mx-auto text-center relative">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 mb-10">
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">The Methodology</span>
          </div>
          
          <h1 className="text-7xl md:text-[110px] font-black text-slate-900 mb-10 tracking-tighter leading-[0.85]">
            O rigor por trás <br />
            <span className="italic font-serif font-light text-blue-600">do afeto.</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Fundimos protocolos clínicos de elite com uma sensibilidade humana sem precedentes. É o que chamamos de <span className="font-bold text-slate-900">Engenharia do Cuidado</span>.
          </p>
        </div>
      </section>

      {/* 2. PILARES - GLASS MORPHISM DE LUXO */}
      <section className="py-24 container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-3 gap-10">
          {[
            {
              icon: Brain,
              title: "Neuro-Arquitetura",
              desc: "Implementamos estímulos cognitivos baseados em plasticidade neural para preservar a identidade e a memória."
            },
            {
              icon: HeartPulse,
              title: "Vigilância Clínica",
              desc: "Um sistema de monitorização silencioso e constante, garantindo segurança sem invadir a privacidade do lar."
            },
            {
              icon: Activity,
              title: "Bio-Cinética",
              desc: "Planos de mobilidade desenhados por fisioterapeutas para manter a independência motora com dignidade."
            }
          ].map((item, i) => (
            <div key={i} className="group relative p-12 rounded-[4rem] bg-white border border-gray-50 shadow-[0_30px_70px_rgba(0,0,0,0.03)] hover:shadow-blue-100/50 transition-all duration-700">
              <div className="mb-10 w-20 h-20 bg-slate-950 rounded-3xl flex items-center justify-center text-white shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
                <item.icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-5 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. A JORNADA - LUXO EXPERIENCIAL */}
      <section className="py-40 bg-[#050A18] rounded-[5rem] mx-4 md:mx-10 shadow-2xl text-white overflow-hidden relative">
        {/* Linha de luz sutil no fundo */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent hidden md:block"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Protocolo de Elite</h2>
            <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs font-serif italic">A sequência da excelência</p>
          </div>

          <div className="space-y-40 max-w-6xl mx-auto">
            {[
              { 
                step: "01", 
                title: "Diagnóstico Multidimensional", 
                content: "Realizamos uma imersão técnica nas necessidades fisiológicas e psicológicas do assistido antes do primeiro turno.",
                icon: Microscope 
              },
              { 
                step: "02", 
                title: "PCI: Plano Individualizado", 
                content: "Construímos um 'blueprint' de cuidado que orquestra alimentação, medicação e lazer de forma cirúrgica.",
                icon: ClipboardCheck 
              },
              { 
                step: "03", 
                title: "Matching por Algoritmo Humano", 
                content: "Avaliamos a sinergia de personalidade entre o cuidador e a família para garantir um convívio harmonioso.",
                icon: Star 
              },
              { 
                step: "04", 
                title: "Supervisão de Auditoria", 
                content: "Controle de qualidade ininterrupto com visitas de enfermagem para assegurar o padrão Cuidoo+.",
                icon: ShieldCheck 
              }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-20 items-center`}>
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                  <span className="text-[120px] font-black leading-none text-blue-500/10 mb-[-60px] tracking-tighter">{item.step}</span>
                  <div className="relative pt-4">
                    <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                      <div className="w-12 h-px bg-blue-500"></div>
                      <h4 className="text-3xl font-bold tracking-tight">{item.title}</h4>
                    </div>
                    <p className="text-slate-400 text-xl font-light leading-relaxed">{item.content}</p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-600/20 to-transparent border border-white/5 flex items-center justify-center backdrop-blur-3xl shadow-inner group">
                    <item.icon size={60} className="text-blue-500 group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA CONCIERGE - O FORMULÁRIO COMO CONVITE PRIVADO */}
      <section id="contato-metodologia" className="py-40 container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-[5rem] shadow-[0_100px_150px_rgba(0,0,0,0.06)] overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          
          <div className="bg-slate-950 p-20 lg:w-2/5 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-0"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-12">
                <Info className="text-white" />
              </div>
              <h3 className="text-5xl font-black mb-8 leading-none tracking-tighter">
                O próximo nível <br/>do cuidado.
              </h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Agende uma consulta técnica privada para desenharmos juntos o protocolo ideal para a sua família.
              </p>
            </div>

            <div className="mt-20 pt-10 border-t border-white/10 relative z-10">
              <p className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-500 mb-2">Exclusive Coverage</p>
              <p className="text-2xl font-bold font-serif italic">Lisboa | Cascais | Sintra</p>
            </div>
          </div>
          
          <div className="p-20 lg:w-3/5 bg-white">
            <div className="mb-12">
              <h4 className="text-3xl font-black text-slate-900 tracking-tighter mb-4">Solicitar Avaliação Técnica</h4>
              <p className="text-slate-400 font-light flex items-center gap-2 italic">
                Sua privacidade é nossa prioridade absoluta <ChevronRight size={14}/>
              </p>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>
    </div>
  );
}