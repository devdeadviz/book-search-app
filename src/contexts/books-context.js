import { createContext, useContext, useState } from "react";

const defaultBookData = {
  books: [],
  bookKeyword: "",
};

const BookContext = createContext(defaultBookData);

const BookProvider = ({ children }) => {
  const [bookKeyword, setBookKeyword] = useState("");
  const [books, setBooks] = useState([]);

  return (
    <BookContext.Provider
      value={{ bookKeyword, setBookKeyword, books, setBooks }}
    >
      {children}
    </BookContext.Provider>
  );
};

const useBooks = () => useContext(BookContext);

export { BookProvider, useBooks };
