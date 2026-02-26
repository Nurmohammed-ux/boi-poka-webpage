import { MapPin, StickyNote, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { removeStoredDB } from "../../Utilities/addToDB";
import { toast } from "react-toastify";

const ListedBooks = ({ book, myReadList, setMyReadList }) => {
  const {
    bookId,
    bookName,
    image,
    author,
    publisher,
    totalPages,
    category,
    tags,
    yearOfPublishing,
    rating,
  } = book;
  const handleRemove = (id) => {
    removeStoredDB(id);
    const remainingReadList = myReadList.filter((book) => book.bookId !== id);
    setMyReadList([...remainingReadList]);
    toast("You successfully remove this book from ReadList");
  };
  return (
    <div className="border h-69.25 border-[#131313]/20 p-6 flex flex-col md:flex-row items-center gap-10 mt-6 rounded-lg">
      <div className="bg-[#131313]/5 h-full rounded-2xl">
        <img
          className="h-full w-52.25 px-7.5 py-7.5"
          style={{
            transform: "rotateY(-35deg) rotateX(2deg)",
          }}
          src={image}
          alt={bookName}
        />
      </div>
      <div>
        <div>
          <h3 className="text-2xl font-bold mb-3">{bookName}</h3>
          <p className="text-[#131313]/80 font-medium">By : {author}</p>
          <div className="flex items-center my-4 space-x-5">
            <p className="font-bold">Tag</p>
            <p className="text-[#23BE0A] bg-[#23BE0A]/5 px-3 py-2 font-medium rounded-4xl">
              #{tags[0]}
            </p>
            <p className="text-[#23BE0A] bg-[#23BE0A]/5 px-3 py-2 font-medium rounded-4xl">
              #{tags[1]}
            </p>
            <p className="flex text-[#131313]/80">
              <MapPin className="mr-3" />
              Year of Publishing: {yearOfPublishing}
            </p>
          </div>
          <div className="flex items-center text-[#131313]/60 space-x-10 pb-5 border-b border-dashed border-gray-300">
            <p className="flex">
              <Users className="mr-3" />
              Publisher: {publisher}
            </p>
            <p className="flex">
              <StickyNote className="mr-3" />
              Pages {totalPages}
            </p>
          </div>
          <div className="flex items-center space-x-6 mt-4">
            <p className="bg-[#328EFF]/15 text-[#328EFF] px-4 py-1 rounded-4xl">
              {category}
            </p>
            <p className="bg-[#FFAC33]/15 text-[#FFAC33] px-4 py-1 rounded-4xl">
              {rating}
            </p>
            <Link
              to={`/book/${bookId}`}
              className="bg-[#23BE0A] text-white font-medium px-4 py-1 rounded-4xl"
            >
              View Details
            </Link>
            <p
              onClick={() => handleRemove(bookId)}
              className="bg-red-500 text-white cursor-pointer font-medium px-4 py-1 rounded-4xl"
            >
              Remove
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
