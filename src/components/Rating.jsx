import { FaStar } from "react-icons/fa";

const Rating = () => {
  return (
    <div className="flex text-red-400 items-center gap-2">
      <span className="font-bold text text-black">5.0</span>
      <div className="flex">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
  );
};

export default Rating;
