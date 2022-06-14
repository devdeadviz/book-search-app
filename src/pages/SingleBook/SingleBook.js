import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleVolume } from "../../services";
import "./SingleBook.css";

const SingleBook = () => {
  const { bookId } = useParams();

  const [book, setBook] = useState();

  useEffect(() => {
    (async () => {
      const data = await getSingleVolume(bookId);
      setBook(data);
    })();
  }, [bookId]);

  return (
    <div className="single-book-wrapper">
      <div className="single-book-image-wrapper">
        <img
          className="single-book-thumbnail"
          src={book?.volumeInfo?.imageLinks?.thumbnail}
          alt={book?.volumeInfo?.title}
        />
      </div>
      <div className="single-book-header">
        <h2 className="single-book-heading">{book?.volumeInfo.title}</h2>
        <h3>{book?.volumeInfo?.subtitle}</h3>
        <small className="single-book-sub-heading">
          {book?.volumeInfo.publisher}
        </small>
      </div>
      <div className="single-book-body">
        <p>{book?.volumeInfo.description}</p>
        <div className="single-book-details-wrapper mt-2">
          <div className="single-book-published-date">
            Categories:
            {book?.volumeInfo?.categories?.map((category) => category)}
          </div>
          <div className="single-book-rating">
            Author: {book?.volumeInfo?.authors?.map((author) => author)}
          </div>
        </div>
      </div>
      <div className="single-book-footer">
        <a target="_blank" rel="noreferrer" href={book?.volumeInfo.previewLink}>
          <button type="button" className="single-book-view-btn">
            Preview Book
          </button>
        </a>
      </div>
    </div>
  );
};

export { SingleBook };
