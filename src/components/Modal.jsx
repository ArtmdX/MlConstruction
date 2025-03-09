export default function Modal({ title, description, onClose }) {
  return (
    <div className="fixed inset-0 flex px-3 items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
      <div className="bg-white p-6 rounded shadow-lg w-5xl">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-4 text-lg">{description}</p>
        <div className="flex gap-5">
          <a
            href="#contact"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:scale-105 transition cursor-pointer"
            onClick={onClose}>
            Request quote
          </a>
          <button
            onClick={onClose}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:scale-105 transition">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
