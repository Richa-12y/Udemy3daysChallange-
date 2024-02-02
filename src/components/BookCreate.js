import React, { useState } from "react";

const BookCreate = (props) => {
  const { handleCreateBook } = props;
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <div>Add a Book</div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
