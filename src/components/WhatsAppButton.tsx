export function WhatsAppButton() {
  const phone = "+351 926 893 603 "; // TROQUE PELO SEU NÚMERO
  const message = "Olá! Gostaria de um orçamento para cuidadora de idosos.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Balão de Texto (Tooltip) que aparece no hover */}
      <div className="bg-white text-gray-800 text-sm font-bold py-2 px-4 rounded-2xl shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
        Precisa de ajuda? 👋
      </div>

      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-green-500 text-white p-4 rounded-full shadow-[0_10px_25px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-110 hover:bg-green-600 active:scale-95 flex items-center justify-center overflow-hidden"
        aria-label="Chamar no WhatsApp"
      >
        {/* Efeito de Brilho Animado (Pulse) */}
        <span className="absolute inset-0 rounded-full bg-white opacity-0 hover:animate-ping pointer-events-none"></span>

        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="relative z-10"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.405.314.159.386.541 1.32.588 1.417.049.096.081.209.017.339-.063.13-.135.212-.222.314-.087.101-.183.227-.263.303-.092.088-.188.184-.081.368.107.184.475.783.719 1.002.314.281.583.368.784.453.201.085.317.072.435-.065.118-.137.51-.595.644-.799.134-.204.269-.171.455-.103s1.173.553 1.375.654.339.15.388.235c.049.085.049.493-.095.898z" />
        </svg>
      </a>
    </div>
  );
}