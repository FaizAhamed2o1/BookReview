import { useContext } from "react";
import BooksDataContext from "../../context/BooksDataContext/BooksDataContext";
import BookCard from "../BookCard/BookCard";

const Books = () => {
  const { booksData } = useContext(BooksDataContext);

  return (
    <div className="md:mb-24 mb-16">
      <h2 className="font-heading text-3xl sm:text-[2.5rem] font-bold text-customBlack sm:mb-9 mb-7 text-center">
        Books
      </h2>

      <div className=" lg:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-6">
        {booksData.map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
