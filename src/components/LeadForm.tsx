import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    cidade: '',
    necessidade: 'Apenas companhia',
    urgencia: 'Apenas pesquisando'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.nome,
          message: `
            Telefone: ${formData.telefone}
            Cidade: ${formData.cidade}
            Necessidade: ${formData.necessidade}
            Urgência: ${formData.urgencia}
          `,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ 
        nome: '', 
        telefone: '', 
        cidade: '', 
        necessidade: 'Apenas companhia', 
        urgencia: 'Apenas pesquisando' 
      });
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-full px-2 md:px-0">
      
      {/* NOME */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">
          Nome Completo
        </label>
        <input 
          required
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          type="text" 
          placeholder="Ex: Maria Silva"
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-300"
        />
      </div>

      {/* TELEFONE */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">
          WhatsApp / Telefone
        </label>
        <input 
          required
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          type="tel" 
          placeholder="+351 999 999 999"
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-300"
        />
      </div>

      {/* CIDADE */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">
          Cidade
        </label>
        <input 
          required
          name="cidade"
          value={formData.cidade}
          onChange={handleChange}
          type="text" 
          placeholder="Sua cidade"
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-300"
        />
      </div>

      {/* SELETORES EM GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">
            Necessidade
          </label>
          <select 
            name="necessidade"
            value={formData.necessidade}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 outline-none appearance-none cursor-pointer"
          >
            <option value="Apenas companhia">Apenas companhia</option>
            <option value="Cuidados médicos">Cuidados médicos</option>
            <option value="Pós-operatório">Pós-operatório</option>
            <option value="Atendimento 12h/24h">Atendimento 12h/24h</option>
          </select>
        </div>
        
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">
            Urgência
          </label>
          <select 
            name="urgencia"
            value={formData.urgencia}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 outline-none appearance-none cursor-pointer"
          >
            <option value="Imediata">Imediata</option>
            <option value="Esta semana">Esta semana</option>
            <option value="Apenas pesquisando">Apenas pesquisando</option>
          </select>
        </div>
      </div>

      {/* BOTÃO */}
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl mt-4 shadow-xl shadow-blue-100 transition-all active:scale-[0.98] uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Enviando...
          </>
        ) : (
          "Solicitar Orçamento Grátis"
        )}
      </button>

      {/* FEEDBACK DE STATUS */}
      {status === 'success' && (
        <div className="mt-4 p-4 bg-green-50 border border-green-100 text-green-700 rounded-2xl flex items-center gap-3 animate-in fade-in zoom-in duration-300">
          <CheckCircle2 size={18} />
          <span className="text-xs font-bold uppercase tracking-tight">Recebido com sucesso! Entraremos em contacto.</span>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-4 p-4 bg-red-50 border border-red-100 text-red-700 rounded-2xl flex items-center gap-3 animate-in fade-in zoom-in duration-300">
          <AlertCircle size={18} />
          <span className="text-xs font-bold uppercase tracking-tight">Erro ao enviar. Tente novamente ou use o WhatsApp.</span>
        </div>
      )}
    </form>
  );
}