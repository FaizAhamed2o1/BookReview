import ListedBooksCard from "../ListedBooksCard/ListedBooksCard";
import useBookData from "../../hooks/useBookData";
import { useEffect } from "react";
import PropTypes from "prop-types";
import sortBooks from "../../utils/sortBooks";

const ReadAndWishlistBooksTabs = ({ selectedProperty }) => {
  let sortedReadBooks = [];
  let sortedWishlistBooks = [];

  const readBooks = useBookData("readBooks");

  const wishlistBooks = useBookData("wishlistedBook");

  useEffect(() => {}, [selectedProperty]);

  // Note: The select tag filter code for read books tab.
  sortedReadBooks = [...sortBooks(readBooks, selectedProperty)];
  sortedWishlistBooks = [...sortBooks(wishlistBooks, selectedProperty)];

  // Note: The select tag filter code for wishlist books tab

  return (
    <div role="tablist" className="tabs tabs-lifted md:mb-24 mb-16">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab text-customGray08 after:w-28 text-lg"
        aria-label="Read Books"
        defaultChecked
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 border-x-0 pt-6 border-t border-b-0"
      >
        <div className="space-y-6">
          {sortedReadBooks.map((book) => (
            <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
          ))}
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab text-customGray08 after:w-36 text-lg"
        aria-label="Wishlist Books"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 border-x-0 pt-6 border-t border-b-0"
      >
        <div className="space-y-6">
          {sortedWishlistBooks.map((book) => (
            <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
          ))}
        </div>
      </div>
    </div>
  );
};

ReadAndWishlistBooksTabs.propTypes = {
  selectedProperty: PropTypes.string,
};

export default ReadAndWishlistBooksTabs;
