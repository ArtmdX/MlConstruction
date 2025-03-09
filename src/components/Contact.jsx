import { useStore } from "../store/zuntand";

export default function Contact() {
  const { contact, setContact } = useStore();

  return (
    <section className="h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full">
        <h2 className="text-4xl font-bold text-blue-600 text-center">Contato</h2>
        <form className="mt-6 px-8 space-y-4 ">
          <input
            type="text"
            placeholder="Nome"
            className="w-90 p-2 border rounded"
            onChange={(e) => setContact({ name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-90  p-2 border rounded"
            onChange={(e) => setContact({ email: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Telefone"
            className="w-90 p-2 border rounded"
            onChange={(e) => setContact({ phone: e.target.value })}
          />
          <textarea
            placeholder="Comentário"
            className="w-90 p-2 pb-10 border rounded"
            onChange={(e) => setContact({ message: e.target.value })}></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
