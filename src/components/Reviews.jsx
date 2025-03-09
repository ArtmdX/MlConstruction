import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  { id: 1, name: "John Doe", images: ["img1.jpg", "img2.jpg"], text: "Ótimo serviço, recomendo!", role: "Cliente" },
  {
    id: 2,
    name: "Jane Smith",
    images: ["img3.jpg", "img4.jpg"],
    text: "Equipe muito profissional.",
    role: "Empresária",
  },
  {
    id: 3,
    name: "Carlos Silva",
    images: ["img5.jpg", "img6.jpg"],
    text: "Melhor empresa de construção!",
    role: "Engenheiro",
  },
  { id: 4, name: "Ana Souza", images: ["img7.jpg", "img8.jpg"], text: "Excelente atendimento!", role: "Arquiteta" },
  { id: 5, name: "Lucas Santos", images: ["img9.jpg", "img10.jpg"], text: "Trabalho de qualidade!", role: "Cliente" },
  {
    id: 6,
    name: "Mariana Costa",
    images: ["img11.jpg", "img12.jpg"],
    text: "Muito satisfeita com o serviço.",
    role: "Empresária",
  },
  {
    id: 7,
    name: "João Lima",
    images: ["img13.jpg", "img14.jpg"],
    text: "Equipe excelente, recomendo!",
    role: "Engenheiro",
  },
  { id: 8, name: "Roberta Alves", images: ["img15.jpg", "img16.jpg"], text: "Trabalho impecável!", role: "Arquiteta" },
  { id: 9, name: "Thiago Rocha", images: ["img17.jpg", "img18.jpg"], text: "Muito profissional.", role: "Cliente" },
  {
    id: 10,
    name: "Patrícia Martins",
    images: ["img19.jpg", "img20.jpg"],
    text: "Serviço de primeira.",
    role: "Empresária",
  },
  {
    id: 11,
    name: "Gustavo Ferreira",
    images: ["img21.jpg", "img22.jpg"],
    text: "Excelente experiência!",
    role: "Engenheiro",
  },
  {
    id: 12,
    name: "Cláudia Pereira",
    images: ["img23.jpg", "img24.jpg"],
    text: "Equipe muito dedicada.",
    role: "Arquiteta",
  },
  {
    id: 13,
    name: "Ricardo Gomes",
    images: ["img25.jpg", "img26.jpg"],
    text: "Trabalho de altíssima qualidade.",
    role: "Cliente",
  },
  {
    id: 14,
    name: "Marcio Silva",
    images: ["img27.jpg", "img28.jpg"],
    text: "Profissionalismo e qualidade.",
    role: "Empresário",
  },
  {
    id: 15,
    name: "Elaine Rocha",
    images: ["img29.jpg", "img30.jpg"],
    text: "Recomendo para todos!",
    role: "Engenheira",
  },
];

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  // Paginação
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(0); // Volta para a primeira página
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(totalPages - 1); // Vai para a última página
    }
  };

  // Calcula os reviews da página atual
  const startIndex = currentPage * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  return (
    <section className="py-10 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentReviews.map((review) => (
          <div key={review.id} className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
            <img
              src={review.images[0]} // Aqui estamos pegando a primeira imagem
              alt={review.name}
              className="w-40 h-40 mx-auto mb-4 transition duration-150 ease-in-out"
            />
            <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.role}</p>
            <p className="mt-4 text-gray-700 italic">"{review.text}"</p>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center mt-8">
        <button
          className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
          onClick={prevPage}>
          <FaChevronLeft size={18} />
        </button>
        <span className="mx-4 text-lg font-semibold">
          {currentPage + 1} / {totalPages}
        </span>
        <button
          className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
          onClick={nextPage}>
          <FaChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
