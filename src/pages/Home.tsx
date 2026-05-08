import { Shield, Heart, CheckCircle2, ArrowRight, Star, Quote, Award, CheckSquare, BellRing, Sparkles } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';

export function Home() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* 1. HERO - LUXO MINIMALISTA (ESTILO CONCIERGE) */}
      <section className="relative pt-40 pb-32 px-4 overflow-hidden bg-[#050A18]">
        {/* Gradientes de Profundidade */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="text-white">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-10 backdrop-blur-sm">
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-200">The Gold Standard of Care</span>
            </div>
            
            <h1 className="text-7xl md:text-[100px] font-black mb-10 leading-[0.85] tracking-tighter">
              A arte de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-blue-400 to-indigo-300 italic font-serif py-2">
                cuidar bem.
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-14 leading-relaxed max-w-lg font-light tracking-wide">
              Não oferecemos apenas assistência. Desenhamos um ecossistema de bem-estar personalizado para as famílias mais exigentes de Portugal.
            </p>
            
            <div className="flex items-center gap-8 border-l border-white/10 pl-8">
               <div>
                  <p className="text-3xl font-bold text-white mb-1">9.8</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">NPS Score</p>
               </div>
               <div className="h-10 w-[1px] bg-white/10"></div>
               <div>
                  <div className="flex text-amber-400 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Excelência Comprovada</p>
               </div>
            </div>
          </div>
          
          <div className="relative group lg:pl-10">
            <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] blur-3xl -z-10 group-hover:bg-blue-500/20 transition-all duration-1000"></div>
            <div className="bg-white rounded-[2.5rem] p-4 shadow-[0_50px_100px_rgba(0,0,0,0.4)] border border-white/5">
               <div className="p-8 pb-4">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Consulta de Avaliação</h3>
                  <p className="text-slate-500 text-sm">Inicie o protocolo de cuidado personalizado.</p>
               </div>
               <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELOS INSTITUCIONAIS (DISCRIÇÃO E PODER) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400 mb-12">Certificações & Garantias</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-40 hover:opacity-100 transition-opacity duration-700">
            <div className="flex items-center gap-3">
                <Award size={28} className="text-slate-900" />
                <span className="text-[10px] font-black uppercase leading-tight tracking-widest">Segurança Social<br/>Certificada</span>
            </div>
            <div className="flex items-center gap-3">
                <CheckSquare size={28} className="text-slate-900" />
                <span className="text-[10px] font-black uppercase leading-tight tracking-widest">ERS Registo<br/>nº 15293</span>
            </div>
            <div className="flex items-center gap-3">
                <Shield size={28} className="text-slate-900" />
                <span className="text-[10px] font-black uppercase leading-tight tracking-widest">Seguro Liberty<br/>500.000€</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A FILOSOFIA (BENTO GRID REFINADO) */}
      <section className="py-32 container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 relative rounded-[4rem] overflow-hidden h-[700px] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80" 
              className="absolute inset-0 w-full h-full object-cover"
              alt="Care" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-16 left-16 right-16">
                <span className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Individualidade</span>
                <h2 className="text-5xl font-bold text-white mb-6 tracking-tighter">O luxo da <br/>atenção plena.</h2>
                <p className="text-slate-300 max-w-md text-lg font-light leading-relaxed">Cada gesto, cada medicação e cada conversa são orquestrados por uma equipa técnica multidisciplinar.</p>
            </div>
          </div>
          
          <div className="lg:col-span-5 grid gap-10">
            <div className="bg-[#0A1128] rounded-[4rem] p-16 text-white flex flex-col justify-between group cursor-default">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                    <Heart size={32} />
                </div>
                <div>
                    <h3 className="text-3xl font-bold mb-6 tracking-tight">Cuidado Paliativo & Humanizado</h3>
                    <p className="text-slate-400 leading-relaxed font-light">Especialistas formados para lidar com casos complexos com a máxima delicadeza e rigor clínico.</p>
                </div>
            </div>
            <div className="bg-slate-50 rounded-[4rem] p-16 text-slate-900 flex flex-col justify-between border border-slate-100">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 text-white">
                    <BellRing size={32} />
                </div>
                <div>
                    <h3 className="text-3xl font-bold mb-6 tracking-tight">Resposta Imediata</h3>
                    <p className="text-slate-500 leading-relaxed font-light">Coordenação ativa 24/7. Em situações críticas, a nossa equipa de enfermagem responde sem hesitação.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROVA SOCIAL (DISCRETA E ELEGANTE) */}
      <section className="py-32 bg-[#050A18]">
        <div className="container mx-auto px-4 text-center">
           <Quote className="text-blue-600/30 mx-auto w-24 h-24 mb-10" />
           <p className="text-white text-3xl md:text-5xl font-light italic max-w-5xl mx-auto leading-tight tracking-tight mb-16">
             "A Cuidar+ não é uma empresa de serviços, é um porto seguro. O nível de detalhe e carinho que dedicam à minha mãe é algo que eu não acreditava ser possível encontrar em Portugal."
           </p>
           <div className="flex flex-col items-center gap-6">
              <img src="https://i.pravatar.cc/100?img=32" className="w-24 h-24 rounded-full grayscale hover:grayscale-0 transition-all duration-500 border-2 border-blue-600/20 p-2" alt="Client" />
              <div>
                <p className="text-white font-bold text-xl tracking-tight">Dra. Helena Menezes</p>
                <p className="text-blue-500 font-black uppercase tracking-[0.2em] text-[10px]">Quinta da Marinha, Cascais</p>
              </div>
           </div>
        </div>
      </section>

      {/* 5. CTA FINAL - O CONVITE PARA O EXCLUSIVO */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-16">
            Dê o primeiro passo <br/>para a tranquilidade.
          </h2>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group relative inline-flex items-center gap-6 bg-slate-900 text-white px-16 py-8 rounded-full font-black text-xl hover:bg-blue-700 transition-all shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
          >
            SOLICITAR CONSULTA PRIVADA
            <ArrowRight className="group-hover:translate-x-3 transition-transform" size={24} />
          </button>
          <div className="mt-16 flex justify-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
             <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/> Privacidade Total</span>
             <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/> Sem Compromisso</span>
          </div>
        </div>
      </section>
    </div>
  );
}