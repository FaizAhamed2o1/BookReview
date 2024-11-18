import { useContext } from "react";
import { getStoredBooks } from "../utils/localstorage";
import BooksDataContext from "../context/BooksDataContext/BooksDataContext";

const useBookData = (localStorageFieldName) => {
  const storedBooksId = getStoredBooks(localStorageFieldName);

  const { booksData } = useContext(BooksDataContext);

  const filteredBooksData = booksData.filter((bookData) =>
    storedBooksId.includes(bookData.bookId)
  );

  return filteredBooksData;
};

export default useBookData;
