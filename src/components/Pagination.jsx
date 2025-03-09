import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination({ onPageChange, currentPage, totalPages }) {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="space-x-2 mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-700 cursor-pointer transition disabled:opacity-50">
          <FaChevronLeft />
        </button>

        <span className="text-lg font-bold">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-700 cursor-pointer transition disabled:opacity-50">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
