import { useState, useEffect } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Modal from "./Modal";
import servicesData from "../data/services";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Controle da página
  const [itemsPerPage, setItemsPerPage] = useState(3); // Inicializa com 3 itens para desktop

  const services = servicesData;

  // Lógica de mudança de itens por página para mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setItemsPerPage(1); // 1 item por página para telas pequenas (mobile)
      } else {
        setItemsPerPage(services.length); // Exibe todos os serviços para desktop
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Chama para garantir que o tamanho correto seja ajustado quando a página é carregada

    return () => window.removeEventListener("resize", handleResize);
  }, [services.length]);

  // Calcular os índices dos serviços a serem exibidos com base na página atual
  const indexOfLastService = currentPage * itemsPerPage;
  const indexOfFirstService = indexOfLastService - itemsPerPage;
  const currentServices = services.slice(indexOfFirstService, indexOfLastService);

  // Funções para navegação de página
  const nextPage = () => {
    if (currentPage < Math.ceil(services.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="services" className="h-auto py-30 flex justify-center bg-white">
      <div className="w-full text-center">
        <h2 className="text-4xl font-bold text-blue-600">Our Services</h2>
        <div className="mt-20 mx-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {currentServices.map((service, index) => (
            <div
              key={index}
              className="gap-3 flex-col flex p-4 bg-gray-200 rounded shadow cursor-pointer items-center hover:scale-105 transition"
              onClick={() => setSelectedService(service)}>
              <div className="w-full flex justify-between">
                <span className="font-bold">{service.title}</span>
                <FaArrowRight />
              </div>
              <div className="w-full max-w-xs max-h-60 min-h-60 overflow-hidden items-center flex justify-center h-auto shadow-lg rounded">
                <img className="w-full h-full object-cover" src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
        {itemsPerPage === 1 && (
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-700 cursor-pointer transition disabled:opacity-50">
              <FaChevronLeft />
            </button>
            <span className="text-lg font-bold mx-4">
              {currentPage} / {Math.ceil(services.length / itemsPerPage)}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === Math.ceil(services.length / itemsPerPage)}
              className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-700 cursor-pointer transition disabled:opacity-50">
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
      {selectedService && (
        <Modal
          title={selectedService.title}
          description={selectedService.description}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}
