import { useState } from "react";
import { Card, Search } from "../../components";
import { getVolumes } from "../../services";
import "./Homepage.css";

const Homepage = () => {
  const [bookKeyword, setBookKeyword] = useState("");
  const [books, setBooks] = useState([]);

  const searchBookHandler = async (e) => {
    e.preventDefault();
    const data = await getVolumes(bookKeyword);
    setBooks(data);
  };

  return (
    <div className="homepage-wrapper">
      <h1>Book Search App</h1>
      <Search
        bookKeyword={bookKeyword}
        setBookKeyword={setBookKeyword}
        searchBookHandler={searchBookHandler}
      />
      <div className="homepage-books-wrapper">
        {books && books.map((book) => <Card key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export { Homepage };
