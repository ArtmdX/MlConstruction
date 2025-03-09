import { useStore } from "../store/zuntand";

export default function Contact() {
  // eslint-disable-next-line no-unused-vars
  const { contact, setContact } = useStore();

  return (
    <section id="contact" className="h-3/4 py-30 flex items-start justify-center bg-white">
      <div className="max-w-md w-full">
        <h2 className="text-4xl font-bold text-blue-600 text-center">Contact</h2>
        <form className="mt-20 px-8 space-y-4 ">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded"
            onChange={(e) => setContact({ name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            onChange={(e) => setContact({ email: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full p-2 border rounded"
            onChange={(e) => setContact({ phone: e.target.value })}
          />
          <textarea
            placeholder="How can we help you?"
            className="w-full p-2 pb-20 border rounded"
            onChange={(e) => setContact({ message: e.target.value })}></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
