import { useState, useEffect } from 'react';
import { 
  Shield, Heart, CheckCircle2, ArrowRight, Star, 
  Quote, Award, CheckSquare, BellRing, Sparkles, 
  ChevronLeft, ChevronRight 
} from 'lucide-react';
import { LeadForm } from '../components/LeadForm';

export function Home() {
  // 1. DADOS DOS DEPOIMENTOS
  const testimonials = [
    {
      quote: "A CUIDOO+ não é uma empresa de serviços, é um porto seguro. O nível de detalhe e carinho que dedicam à minha mãe é algo que eu não acreditava ser possível encontrar em Portugal.",
      author: "Dra. Helena Menezes",
      location: "Quinta da Marinha, Cascais",
      image: "https://i.pravatar.cc/100?img=32"
    },
    {
      quote: "A paz de espírito que sinto ao saber que meu pai está sob a supervisão da Cuidoo+ não tem preço. Protocolos clínicos impecáveis com um toque profundamente humano.",
      author: "João Pedro Santos",
      location: "Estoril, Lisboa",
      image: "https://i.pravatar.cc/100?img=12"
    },
    {
      quote: "Excelente coordenação e apoio constante. A equipa de enfermagem é extremamente preparada e a comunicação com a família é transparente e imediata.",
      author: "Maria Antónia Castro",
      location: "Avenidas Novas, Lisboa",
      image: "https://i.pravatar.cc/100?img=44"
    }
  ];

  // 2. LÓGICA DO CARROSSEL
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      
      {/* 1. HERO - LUXO MINIMALISTA */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-4 overflow-hidden bg-[#050A18]">
        <div className="absolute top-0 right-0 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
          <div className="text-white">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase text-blue-200">O padrão ouro em cuidados de saúde</span>
            </div>
            
            <h1 className="text-5xl md:text-[100px] font-black mb-8 leading-[0.9] md:leading-[0.85] tracking-tighter">
              A arte de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-blue-400 to-indigo-300 italic font-serif py-2">
                cuidar bem.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-lg font-light tracking-wide">
              Não oferecemos apenas assistência. Desenhamos um ecossistema de bem-estar personalizado para as famílias mais exigentes de Portugal.
            </p>
            
            <div className="flex items-center gap-6 md:gap-8 border-l border-white/10 pl-6 md:pl-8">
               <div>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">9.8</p>
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
          
          <div className="relative group lg:pl-10 mt-10 lg:mt-0 w-full flex justify-center">
              <div className="absolute inset-0 bg-blue-500/10 rounded-[2.5rem] blur-3xl -z-10"></div>
              <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-slate-100 w-full max-w-[500px]">
                <div className="mb-8 text-center lg:text-left">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Consulta Gratuita</h3>
                    <p className="text-slate-500 text-sm">Receba um plano personalizado em minutos.</p>
                </div>
                <LeadForm />
              </div>
          </div>
        </div>
      </section>

      {/* 2. SELOS INSTITUCIONAIS */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400 mb-12">Certificações & Garantias</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-32 opacity-60 hover:opacity-100 transition-opacity duration-700">
            <div className="flex items-center gap-3">
                <Award size={28} className="text-slate-900" />
                <span className="text-[10px] font-black uppercase leading-tight tracking-widest text-left">Segurança Social<br/>Certificada</span>
            </div>
            <div className="flex items-center gap-3">
                <CheckSquare size={28} className="text-slate-900" />
                <span className="text-[10px] font-black uppercase leading-tight tracking-widest text-left">ERS Registo<br/>nº 15293</span>
            </div>
            <div className="flex items-center gap-3">
                <Shield size={28} className="text-slate-900" />
                <span className="text-[10px] font-black uppercase leading-tight tracking-widest text-left">Seguro Liberty<br/>500.000€</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A FILOSOFIA (BENTO GRID) */}
      <section className="py-20 md:py-32 container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-10">
          <div className="lg:col-span-7 relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden h-[450px] md:h-[700px] shadow-2xl">
            <img 
              src="/img/cuidadoshome.jpg" 
              className="absolute inset-0 w-full h-full object-cover"
              alt="Care" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 right-8 md:right-16">
                <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Individualidade</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tighter">O luxo da <br/>atenção plena.</h2>
                <p className="text-slate-300 max-w-md text-base md:text-lg font-light leading-relaxed">Cada gesto, cada medicação e cada conversa são orquestrados por uma equipa técnica multidisciplinar.</p>
            </div>
          </div>
          
          <div className="lg:col-span-5 grid gap-6 md:gap-10">
            <div className="bg-[#0A1128] rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-16 text-white flex flex-col justify-between group cursor-default transition-transform hover:scale-[1.02] duration-500">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                    <Heart size={30} />
                </div>
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-tight">Cuidado Paliativo</h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">Especialistas formados para lidar com casos complexos com a máxima delicadeza e rigor clínico.</p>
                </div>
            </div>
            <div className="bg-slate-50 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-16 text-slate-900 flex flex-col justify-between border border-slate-100 transition-transform hover:scale-[1.02] duration-500">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 text-white">
                    <BellRing size={30} />
                </div>
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-tight">Resposta Imediata</h3>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">Coordenação ativa 24/7. Em situações críticas, a nossa equipa de enfermagem responde sem hesitação.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROVA SOCIAL - CARROSSEL */}
      <section className="py-20 md:py-32 bg-[#050A18] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <Quote className="text-blue-600/20 mx-auto w-16 h-16 md:w-24 md:h-24 mb-8" />
          
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-4">
                    <div className="flex justify-center gap-1 mb-8 text-amber-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={18} fill="currentColor" />
                      ))}
                    </div>

                    <p className="text-white text-xl md:text-4xl font-light italic leading-tight tracking-tight mb-12 text-center">
                      "{t.quote}"
                    </p>

                    <div className="flex flex-col items-center gap-4 md:gap-6">
                      <img 
                        src={t.image} 
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full grayscale hover:grayscale-0 transition-all duration-500 border-2 border-blue-600/20 p-2" 
                        alt={t.author} 
                      />
                      <div className="text-center">
                        <p className="text-white font-bold text-lg md:text-xl tracking-tight">{t.author}</p>
                        <p className="text-blue-500 font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px]">{t.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Setas Laterais */}
            <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 text-white/30 hover:text-blue-400 transition-colors p-2">
              <ChevronLeft size={40} strokeWidth={1} />
            </button>
            <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 text-white/30 hover:text-blue-400 transition-colors p-2">
              <ChevronRight size={40} strokeWidth={1} />
            </button>
          </div>

          {/* Indicadores (Dots) */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1 transition-all duration-500 rounded-full ${activeIndex === i ? 'w-8 bg-blue-600' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-40 text-center relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-16 leading-tight">
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