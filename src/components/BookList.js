import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, deleteBookById }) => {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} deleteBookById={deleteBookById} />
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
