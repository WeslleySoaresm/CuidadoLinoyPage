import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Adicionamos o estado para controlar os inputs
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    cidade: '',
    necessidade: 'companhia',
    urgencia: 'planejamento'
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
      setFormData({ nome: '', telefone: '', cidade: '', necessidade: 'companhia', urgencia: 'planejamento' });
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Nome Completo</label>
          <input 
            name="nome" 
            type="text" 
            required 
            value={formData.nome} // Adicionado
            onChange={handleChange} // Adicionado
            placeholder="Ex: Maria Silva"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-800" 
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">WhatsApp/Telefone</label>
            <input 
              name="telefone" 
              type="tel" 
              required 
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-800" 
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Cidade</label>
            <input 
              name="cidade" 
              type="text" 
              required 
              value={formData.cidade}
              onChange={handleChange}
              placeholder="Sua cidade"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-800" 
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">O que você precisa?</label>
          <select 
            name="necessidade" 
            value={formData.necessidade}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none text-gray-800"
          >
            <option value="companhia">Apenas companhia</option>
            <option value="cuidados_basicos">Cuidados básicos e remédios</option>
            <option value="pos_operatorio">Pós-operatório</option>
            <option value="24h">Atendimento 24h</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Urgência</label>
          <select 
            name="urgencia" 
            value={formData.urgencia}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none text-gray-800"
          >
            <option value="imediata">Para hoje / Emergência</option>
            <option value="esta_semana">Para esta semana</option>
            <option value="planejamento">Apenas pesquisando preços</option>
          </select>
        </div>

        <button type="submit" disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg disabled:opacity-50">
          {isSubmitting ? 'Enviando...' : 'Solicitar Orçamento Grátis'}
        </button>

        {status === 'success' && (
          <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center font-medium">
            ✓ Recebemos seu pedido! Entraremos em contato em breve.
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center font-medium">
            ❌ Erro ao enviar. Tente novamente ou chame no WhatsApp.
          </div>
        )}
      </form>
    </div>
  );
}