import { useBooks } from "../../contexts";
import "./Search.css";

const Search = ({ searchBookHandler }) => {
  const { bookKeyword, setBookKeyword } = useBooks();

  return (
    <>
      <form onSubmit={searchBookHandler}>
        <input
          className="book-search"
          type="text"
          placeholder="Search Books Name Here...."
          onChange={(e) => setBookKeyword(e.target.value)}
          value={bookKeyword}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export { Search };
