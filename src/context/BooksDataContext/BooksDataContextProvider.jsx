import { useState } from "react";
import BooksDataContext from "./BooksDataContext";

// eslint-disable-next-line react/prop-types
const BooksDataContextProvider = ({ children }) => {
  const [booksData, setBooksData] = useState([]);

  return (
    <BooksDataContext.Provider value={{ booksData, setBooksData }}>
      {children}
    </BooksDataContext.Provider>
  );
};

export default BooksDataContextProvider;
