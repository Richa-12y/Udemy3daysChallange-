import { useContext, useEffect } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./context/book";

function App() {
  const { fetchData } = useContext(BookContext);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
