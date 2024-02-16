import { createContext, useState } from "react";

const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  /**
   * git api calls
   */

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.put(`http://localhost:3001/books/${id}`);

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
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  return <BookContext.Provider value={{}}>{children}</BookContext.Provider>;
}

export { Provider };
export default BookContext;
