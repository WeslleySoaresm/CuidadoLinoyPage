import { Shield, Award, Users } from 'lucide-react';

export function SejaCuidadora() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // DICA: Para recrutamento, muitas agências preferem levar para um Google Forms
    // maior ou para um número de RH no WhatsApp. 
    // Aqui vamos simular o redirecionamento para o seu formulário oficial:
    window.open('https://forms.gle/SEU_ID_DO_GOOGLE_FORMS', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero de Recrutamento */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Trabalhe Conosco</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Faça parte da maior rede de cuidadores da região. Valorizamos seu trabalho e oferecemos suporte contínuo.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Lado Esquerdo: Benefícios */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Por que ser uma Cuidar+?</h2>
          
          <div className="flex gap-4">
            <div className="bg-blue-100 p-3 rounded-lg h-fit">
              <Award className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Pagamento Justo</h3>
              <p className="text-gray-600">Remuneração acima da média do mercado e bônus por performance.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-blue-100 p-3 rounded-lg h-fit">
              <Shield className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Segurança Jurídica</h3>
              <p className="text-gray-600">Contratos claros e suporte total da nossa equipe de coordenação.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-blue-100 p-3 rounded-lg h-fit">
              <Users className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Treinamento Gratuito</h3>
              <p className="text-gray-600">Acesso a cursos de especialização e primeiros socorros.</p>
            </div>
          </div>
        </div>

        {/* Lado Direito: Pré-Cadastro */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-center">Pré-Cadastro</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
              <input type="text" required className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">WhatsApp</label>
                <input type="tel" required className="w-full mt-1 px-4 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Experiência (Anos)</label>
                <input type="number" required className="w-full mt-1 px-4 py-2 border rounded-lg" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Principal Especialidade</label>
              <select className="w-full mt-1 px-4 py-2 border rounded-lg">
                <option>Cuidador de Idosos</option>
                <option>Técnico em Enfermagem</option>
                <option>Fisioterapeuta</option>
                <option>Acompanhante Hospitalar</option>
              </select>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800 mb-3 font-medium">
                Ao clicar no botão abaixo, você será redirecionada para o nosso formulário detalhado de currículo.
              </p>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Continuar Inscrição
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}