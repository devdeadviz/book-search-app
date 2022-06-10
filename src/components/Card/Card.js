import "./Card.css";

const Card = ({ book }) => {
  return (
    <div className="book-card-wrapper">
      <div className="book-card-image-wrapper">
        <img
          className="book-thumbnail"
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
      </div>
      <div className="book-card-header">
        <h2 className="book-card-heading">{book.volumeInfo.title}</h2>
        <small className="book-card-sub-heading">
          {book.volumeInfo.publisher}
        </small>
      </div>
      <div className="book-card-body">
        <div className="book-card-details-wrapper mt-2">
          <div className="book-published-date">
            {book.volumeInfo.publishedDate}
          </div>
          <div className="book-rating">
            Rating {book.volumeInfo.averageRating}
          </div>
        </div>
      </div>
      <div className="book-card-footer">
        <button type="button" className="book-view-btn">
          View Book
        </button>
      </div>
    </div>
  );
};

export { Card };
