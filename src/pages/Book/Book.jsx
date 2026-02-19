import { Star } from "lucide-react";
import React from "react";

const Book = ({ book }) => {
  const { bookName, image, author, category, rating, tags } = book;
  return (
    <div className="border border-gray-200 p-6 rounded-2xl flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <div className="bg-[#F3F3F3] rounded-2xl py-8 mb-6 flex justify-center items-center h-80">
        <img
          className="h-full object-contain shadow-md"
          src={image}
          alt={bookName}
        />
      </div>
      <div className="flex items-center text-[#23BE0A] font-medium">
        <p className="bg-[#23BE0A]/5 px-4 py-2 mr-4 rounded-4xl">{tags[0]}</p>
        <p className="bg-[#23BE0A]/5 px-4 py-2 mr-3 rounded-4xl">{tags[1]}</p>
      </div>
      <div className="my-6 border-b border-dashed border-gray-200">
        <h5 className="text-2xl font-bold">{bookName}</h5>
        <p className="my-4 font-medium text-[#131313]/80">By : {author}</p>
      </div>
      <div className="flex justify-between items-center font-medium text-[#131313]/80">
        <p>{category}</p>
        <div className="flex space-x-4">
          <p>{rating}</p>
          <Star />
        </div>
      </div>
    </div>
  );
};

export default Book;
