import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, bookName, image, author, category, rating, tags } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="border border-gray-200 p-6 rounded-2xl flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
        <div className="bg-[#F3F3F3] rounded-2xl py-12 mb-6 flex justify-center items-center h-100 perspective-distant">
          <img
            className="h-full object-contain transition-all duration-500 hover:-translate-y-3"
            style={{
              transform: "rotateY(-25deg) rotateX(8deg)",
              transformStyle: "preserve-3d",
              boxShadow: `
                        20px 30px 60px rgba(0, 0, 0, 0.25),
                        5px 10px 20px rgba(0, 0, 0, 0.15)
                      `,
            }}
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
    </Link>
  );
};

export default Book;
