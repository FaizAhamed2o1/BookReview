import { useLocation } from "react-router-dom";
import Hashtag from "../../components/Hashtag/Hashtag";
import { useEffect } from "react";
import {
  getStoredBooks,
  removeFromWishlist,
  setBooksToLocalStorage,
} from "../../utils/localstorage";
import { successToast, warningToast } from "../../utils/toasts";

const BookDetails = () => {
  // Note: To get the passed bookData from state
  const location = useLocation();
  const book = location.state;

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleReadBtn = () => {
    const isReadBefore = setBooksToLocalStorage("readBooks", bookId);
    const wishlistedBooks = getStoredBooks("wishlistedBook");

    const isAlreadyWishlisted = wishlistedBooks.find(
      (wishlisted) => wishlisted === bookId
    );

    if (!isReadBefore) {
      // Note: Checks if the book that we add on the read list is already on the wishlist. if it is, then it will be removed.
      isAlreadyWishlisted && removeFromWishlist(bookId);
      successToast("Added to read list successfully! 🎉");
    } else {
      warningToast("Already exists on the read list. 👍");
    }
  };

  const handleWishlistBtn = () => {
    const readBooks = getStoredBooks("readBooks");
    const wishlistedBooks = getStoredBooks("wishlistedBook");

    const isRead = readBooks.find((readBook) => readBook === bookId);

    const isWishlisted = wishlistedBooks.find(
      (wishlistedBook) => wishlistedBook === bookId
    );

    if (!isRead && !isWishlisted) {
      setBooksToLocalStorage("wishlistedBook", bookId);

      successToast("Added to the wishlist successfully! ❤️");
    } else {
      warningToast("Book already read. Can't add to wishlist. ❌");
    }
  };

  // Note: To show the page from the top
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="md:grid-cols-2 lg:gap-12 md:mb-24 grid grid-cols-1 gap-8 mb-16">
      {/* Book image */}
      <div className="bg-customGrayBg rounded-2xl min-h-80 sm:px-4 flex items-center justify-center py-8">
        <img
          src={image}
          alt={bookName}
          className="max-w-[50%] sm:max-w-[40%] md:max-w-[80%] lg:max-w-[60%] aspect-[2/3]"
        />
      </div>

      {/* Book Details */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-heading font-bold text-customBlack mb-4">
            {bookName}
          </h2>

          <p className="md:text-xl text-customGray08 text-lg font-medium">
            By: {author}
          </p>
        </div>

        <p className="md:text-xl text-customGray08 border-y md:py-4 py-2 text-lg font-medium">
          {category}
        </p>

        <p className="text-customGray07 leading-relaxed">
          <strong className="text-customBlack">Review:</strong> {review}
        </p>

        <div className=" flex flex-wrap items-center gap-3 pb-6 border-b">
          <p>
            <strong>Tag</strong>
          </p>

          {tags.map((tag, index) => (
            <Hashtag key={index} tag={tag}></Hashtag>
          ))}
        </div>

        <div className="gap-14 flex items-center">
          <div className="text-customGray07 space-y-3 leading-relaxed">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>

          <div className="text-customBlack space-y-3 font-bold leading-relaxed">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>

        {/* Review and wishlist button */}
        <div className="space-x-4">
          <button
            className="btn md:py-4 md:px-7 md:text-lg h-fit hover:opacity-85 sm:text-base text-customBlack mt-2 text-sm font-semibold bg-transparent border border-[#1313134c] outline-none"
            onClick={handleReadBtn}
          >
            Read
          </button>

          <button
            className="btn md:py-4 md:px-7 md:text-lg bg-[#50b1c9] h-fit hover:bg-blue-300 sm:text-base mt-2 text-sm font-semibold text-white outline-none"
            onClick={handleWishlistBtn}
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
