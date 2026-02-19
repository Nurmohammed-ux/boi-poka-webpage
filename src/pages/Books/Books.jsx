import React from "react";
import { useLoaderData } from "react-router";
import Book from "../Book/Book";

const Books = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div className="my-25">
      <h2 className="text-center text-4xl font-bold mb-9">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
