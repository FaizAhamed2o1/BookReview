import PropTypes from "prop-types";
import Hashtag from "../Hashtag/Hashtag";
import { SlLocationPin } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { LuFileBarChart2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const ListedBooksCard = ({ book }) => {
  const {
    bookName,
    totalPages,
    author,
    image,
    tags,
    publisher,
    yearOfPublishing,
    category,
    rating,
  } = book;

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/bookDetails", { state: book });
  };

  return (
    <div className="rounded-2xl sm:flex-row flex flex-col items-center w-full gap-6 p-6 border">
      {/* card image */}
      <div className="sm:w-60 bg-customGrayBg rounded-2xl py-7 flex items-center justify-center">
        <img
          className="w-[50%] sm:w-[60%] aspect-[2/3]"
          src={image}
          alt={bookName}
        />
      </div>

      {/* card content */}
      <div className="flex-1 w-full space-y-4">
        <div>
          <h3 className="font-heading text-customBlack mb-3 text-2xl font-bold">
            {bookName}
          </h3>
          <p className="text-customGray08 font-medium">By : {author}</p>
        </div>

        <div className="lg:flex-row lg:items-center flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-customBlack">
              <strong>Tag</strong>
            </p>
            {tags.map((tag, index) => (
              <Hashtag key={index} tag={tag}></Hashtag>
            ))}
          </div>

          <p className="text-customGray08 flex items-center gap-3">
            <span className="text-lg">
              <SlLocationPin />
            </span>{" "}
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>

        <div className="text-customGray06 md:flex-row md:gap-4 flex flex-col gap-2 pb-4 mb-4 border-b">
          <p className="flex items-center gap-2">
            <span className="text-lg">
              <GoPeople />
            </span>
            Publisher: {publisher}
          </p>

          <p className="flex items-center gap-2">
            <span>
              <LuFileBarChart2 />
            </span>{" "}
            Page {totalPages}
          </p>
        </div>

        <div className="md:flex md:items-center grid grid-cols-1 gap-3 text-sm">
          <p className="px-5 py-2.5 bg-[#328eff26] rounded-full text-[#328eff] text-center">
            Category: {category}
          </p>

          <p className="px-5 py-2.5 bg-[#ffac3326] rounded-full text-[#ffac33] text-center">
            Rating: {rating}
          </p>

          <button
            onClick={handleViewDetails}
            className="px-5 py-2.5 bg-customPrimaryGreen rounded-full text-white text-center"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

ListedBooksCard.propTypes = {
  book: PropTypes.object,
};

export default ListedBooksCard;
