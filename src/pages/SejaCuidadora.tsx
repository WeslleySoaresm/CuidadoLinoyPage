import { Shield, Award, Users, CheckCircle2, ArrowRight, Sparkles, Star, MessageCircle } from 'lucide-react';
export function SejaCuidadora() {
  const formsLink = import.meta.env.VITE_FORMS_LINK;
  const grupoWhatsApp = import.meta.env.VITE_GRUPO_WHATSAPP;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(formsLink) {
      window.open( formsLink, '_blank');
    }
    
  };
  

  const handleWhatsAppGroup = () => {
   if(grupoWhatsApp){
    window.open( grupoWhatsApp, '_blank');
   }
    
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* 1. HERO */}
      <section className="relative pt-40 pb-32 px-4 overflow-hidden bg-[#050A18]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-10 backdrop-blur-sm">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-200">Carreiras de Elite 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-[90px] font-black text-white mb-10 tracking-tighter leading-[0.85]">
            Onde o talento <br />
            <span className="italic font-serif font-light text-blue-400 py-2 inline-block">encontra o propósito.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Não procuramos apenas funcionários. Selecionamos profissionais de excelência para integrar a rede de cuidados mais prestigiada de Portugal.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Lado Esquerdo: Proposta de Valor + NOVO BOTÃO WHATSAPP */}
          <div className="space-y-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter">O Padrão Cuidoo+ para profissionais.</h2>
                <p className="text-slate-500 text-lg font-light leading-relaxed max-w-lg">
                  Valorizamos a sua vocação com uma estrutura de suporte que garante a sua dignidade e crescimento profissional.
                </p>
              </div>

              {/* BOTÃO DIFERENCIADO DE WHATSAPP (Comunidade de Elite) */}
              <div 
                onClick={handleWhatsAppGroup}
                className="relative group cursor-pointer max-w-md"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative flex items-center gap-6 p-8 bg-white border border-blue-50 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500 rounded-2xl blur-lg opacity-20 animate-pulse"></div>
                    <div className="relative w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shadow-inner">
                      <MessageCircle size={30} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-green-600">Comunidade VIP</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 leading-tight">Círculo de Talentos Cuidoo+</h4>
                    <p className="text-xs text-slate-500 mt-1">Receba novas vagas e formações exclusivas em primeira mão.</p>
                  </div>
                  <ArrowRight size={20} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
            
            <div className="grid gap-10">
              {[
                { 
                  icon: Award, 
                  title: "Remuneração Diferenciada", 
                  desc: "Pacotes salariais acima da média do setor, refletindo o rigor e a qualidade que exigimos.",
                  color: "text-blue-600",
                  bg: "bg-blue-50"
                },
                { 
                  icon: Shield, 
                  title: "Seguro & Proteção", 
                  desc: "Seguro de responsabilidade civil e apoio jurídico integral para a sua total tranquilidade.",
                  color: "text-slate-900",
                  bg: "bg-slate-100"
                },
                { 
                  icon: Users, 
                  title: "Mentoria Técnica", 
                  desc: "Formação contínua com especialistas em Gerontologia e protocolos de saúde internacionais.",
                  color: "text-blue-600",
                  bg: "bg-blue-50"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className={`${item.bg} ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm transition-transform group-hover:rotate-6`}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <div className="relative lg:sticky lg:top-32">
            <div className="absolute -inset-10 bg-blue-50/50 rounded-[4rem] -z-10 blur-2xl"></div>
            <div className="bg-white p-12 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.06)] border border-gray-100">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl text-white">
                  <Star fill="currentColor" size={24} className="text-blue-500" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">Pré-Candidatura</h3>
                <p className="text-slate-400 font-light mt-2 italic">Acesso exclusivo à nossa rede de elite.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Nome Completo</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ex: Maria Silva"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Contacto (PT)</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="9xx xxx xxx"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-slate-900" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Anos de Exp.</label>
                    <input 
                      type="number" 
                      required 
                      placeholder="Ex: 5"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium text-slate-900" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Especialização Principal</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer font-medium text-slate-900">
                    <option>Cuidadora Gerontológica</option>
                    <option>Enfermagem / Técnica</option>
                    <option>Apoio Pós-Operatório</option>
                    <option>Especialista em Demências</option>
                  </select>
                </div>

                <div className="pt-6">
                  <div className="flex gap-4 mb-8 items-start p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                    <CheckCircle2 className="text-blue-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-[11px] text-blue-900 leading-relaxed font-medium">
                      Ao submeter, confirma que possui autorização de residência e habilitações para exercer funções em Portugal.
                    </p>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="group w-full bg-slate-950 text-white font-black py-6 rounded-[2rem] hover:bg-blue-600 transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95 text-xs uppercase tracking-[0.2em]"
                  >
                    Submeter Candidatura
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}