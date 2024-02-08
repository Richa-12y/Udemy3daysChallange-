import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleCreateBook = async (title) => {
    // console.log(title, "Need to Add with");
    // const updatedBooks = [
    //   ...books,
    //   { id: Math.round(Math.random() * 9999), title: title },
    // ];
    // setBooks(updatedBooks);
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    // console.log(response, "check post response");
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        deleteBookById={deleteBookById}
        editBookById={editBookById}
      />
      <BookCreate handleCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
