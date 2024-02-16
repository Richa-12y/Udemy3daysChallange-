import { useContext, useEffect, useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
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
