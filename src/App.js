import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    console.log(title, "Need to Add with");
  };
  return (
    <div className="App">
      <BookCreate handleCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
