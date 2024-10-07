import { FaStar } from "react-icons/fa";

const RecommendationCard = ({ imgLink, name, title, comment }) => {
  return (
    <div
      className={`md:max-w-[400px] w-full mx-5 mb-5 rounded-lg p-5 pt-10 flex flex-col  bg-[#ffffff15] border-l `}
    >
      <div className="flex items-center mb-3">
        <img src={imgLink} className="rounded-full w-[80px] mr-5" />
        <div>
          <p className="font-bold text-lg">{name}</p>
          <p className="text-gray-400 text-sm mb-2">{title}</p>
          <div className="flex text-[#5de0e6]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-300">{comment}</p>
    </div>
  );
};

export default RecommendationCard;
