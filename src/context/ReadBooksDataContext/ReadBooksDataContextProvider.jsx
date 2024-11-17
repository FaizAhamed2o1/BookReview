import { useContext } from "react";
import ReadBooksDataContext from "./ReadBooksDataContext";

const ReadBooksDataContextProvider = ({ children }) => {
  const [readBooksData, setReadBooksData] = useContext([]);

  return (
    <ReadBooksDataContext.Provider value={{ readBooksData, setReadBooksData }}>
      {children}
    </ReadBooksDataContext.Provider>
  );
};

export default ReadBooksDataContextProvider;
