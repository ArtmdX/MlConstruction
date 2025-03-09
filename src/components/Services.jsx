import { useState } from "react";
import Modal from "./Modal";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="h-screen flex items-center justify-center bg-white">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-blue-600">Nossos Serviços</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {["Serviço 1", "Serviço 2", "Serviço 3"].map((service, index) => (
            <div
              key={index}
              className="p-4 bg-gray-200 rounded shadow cursor-pointer hover:scale-105 transition"
              onClick={() => setSelectedService(service)}>
              {service}
            </div>
          ))}
        </div>
      </div>
      {selectedService && <Modal title={selectedService} onClose={() => setSelectedService(null)} />}
    </section>
  );
}
