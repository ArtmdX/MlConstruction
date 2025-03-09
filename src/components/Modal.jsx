export default function Modal({ title, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-4">Mais informações sobre {title}...</p>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Fechar
        </button>
      </div>
    </div>
  );
}
