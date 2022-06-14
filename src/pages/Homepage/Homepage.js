import { Card, Search } from "../../components";
import { useBooks } from "../../contexts";
import { getVolumes } from "../../services";
import "./Homepage.css";

const Homepage = () => {
  const { bookKeyword, books, setBooks } = useBooks();

  const searchBookHandler = async (e) => {
    e.preventDefault();
    const data = await getVolumes(bookKeyword);
    setBooks(data);
  };

  return (
    <div className="homepage-wrapper">
      <h1>Book Search App</h1>
      <Search searchBookHandler={searchBookHandler} />
      <div className="homepage-books-wrapper">
        {books && books.map((book) => <Card key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export { Homepage };
