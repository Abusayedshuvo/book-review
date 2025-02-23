import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="my-[100px] mx-5 lg:mx-[135px]">
      <p className="text-center font-bold text-[40px]">Books</p>
      <div className="mt-9 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
