import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import useWindowWidth from "../hooks/Width";
import Rating from "./Rating";
import reviewsData from "../data/reviews";

const data = reviewsData;

const Reviews = () => {
  const width = useWindowWidth();
  const [currentReviews, setCurrentReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = width < 768 ? 1 : 3;

  // Recalcular o número total de páginas
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    // Ao mudar a largura da tela, sempre resetar para a primeira página
    setCurrentPage(1);
  }, [itemsPerPage]);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    setCurrentReviews(data.slice(start, start + itemsPerPage));
  }, [currentPage, itemsPerPage]);

  return (
    <section id="reviews" className="py-10 bg-gray-100 ">
      <h2 className="text-4xl font-bold text-blue-600 text-center">Reviews</h2>
      <div className="mt-10 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentReviews.map((review) => (
          <div key={review.id} className="bg-white p-6 min-h-[412px] rounded-lg shadow-lg">
            <div className="flex mt-4 gap-1 justify-center">
              <h3 className="text-lg font-semibold items-center">{review.name}</h3>
            </div>
            <div className="flex justify-center">
              <Rating />
            </div>
            <p className="mt-2 text-gray-700 italic">"{review.text}"</p>
          </div>
        ))}
      </div>
      <Pagination
        data={data}
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
      />
    </section>
  );
};

export default Reviews;
