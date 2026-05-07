export function WhatsAppButton() {
  const phone = "5511999999999"; // TROQUE PELO SEU NÚMERO (55 + DDD + Numero)
  const message = "Olá! Gostaria de um orçamento para cuidadora de idosos.";

  return (
    <a href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Chamar no WhatsApp">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.405.314.159.386.541 1.32.588 1.417.049.096.081.209.017.339-.063.13-.135.212-.222.314-.087.101-.183.227-.263.303-.092.088-.188.184-.081.368.107.184.475.783.719 1.002.314.281.583.368.784.453.201.085.317.072.435-.065.118-.137.51-.595.644-.799.134-.204.269-.171.455-.103s1.173.553 1.375.654.339.15.388.235c.049.085.049.493-.095.898z" />
      </svg>
    </a>
  );
}