import { useParams } from "react-router-dom";
import "./SingleBook.css";

const SingleBook = () => {
  const { bookId } = useParams();
  console.log(bookId);
  return <div>SingleBook</div>;
};

export { SingleBook };
