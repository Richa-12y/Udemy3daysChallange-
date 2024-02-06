import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, deleteBookById, editBookById }) => {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        deleteBookById={deleteBookById}
        editBookById={editBookById}
      />
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
