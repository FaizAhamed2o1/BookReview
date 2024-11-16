import PropTypes from "prop-types";
import Hashtag from "../Hashtag/Hashtag";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
  const { bookName, author, image, category, rating, tags } = book;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/bookDetails", { state: book });
  };

  return (
    <div
      className="rounded-2xl p-6 border cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="bg-customGrayBg rounded-2xl flex items-center justify-center px-4 py-8 mb-6">
        <img src={image} alt={bookName} className="max-w-[40%] aspect-[2/3]" />
      </div>

      <div className="space-y-5">
        {/* Hashtags */}
        <div className="flex flex-wrap items-center gap-3">
          {tags.map((tag, index) => (
            <Hashtag key={index} tag={tag} hash={false}></Hashtag>
          ))}
        </div>

        <div className="pb-5 border-b-2 border-b-[#13131326] border-dashed ">
          <h3 className="text-customBlack font-heading sm:text-2xl mb-4 text-xl font-bold">
            {bookName}
          </h3>

          <p className="text-customGray08 sm:font-base font-sm font-medium">
            By: {author}
          </p>
        </div>

        <div className="sm:text-base text-customGray08 flex items-center justify-between text-sm font-medium">
          <p>{category}</p>

          <p className="flex items-center gap-2">
            <span>{rating}</span>
            <span className="sm:text-lg mb-[2px] sm:mb-1 text-base">
              <FaRegStar />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object,
};

export default BookCard;
