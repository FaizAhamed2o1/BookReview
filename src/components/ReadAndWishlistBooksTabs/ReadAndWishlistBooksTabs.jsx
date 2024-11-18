import ListedBooksCard from "../ListedBooksCard/ListedBooksCard";
import useBookData from "../../hooks/useBookData";

const ReadAndWishlistBooksTabs = () => {
  //   const readBooksId = getStoredBooks("readBooks");
  //   const wishlistBooksId = getStoredBooks("wishlistedBook");

  //   const { booksData } = useContext(BooksDataContext);

  //   //   Note: Filters the books who's IDs are saved in the local storage
  //   const readBooks = booksData.filter((bookData) =>
  //     readBooksId.includes(bookData.bookId)
  //   );

  //   const wishlistBooks = booksData.filter((bookData) =>
  //     wishlistBooksId.includes(bookData.bookId)
  //   );

  const readBooks = useBookData("readBooks");
  console.log(readBooks);

  const wishlistBooks = useBookData("wishlistedBook");

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
          {readBooks.map((book) => (
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
          {wishlistBooks.map((book) => (
            <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadAndWishlistBooksTabs;
