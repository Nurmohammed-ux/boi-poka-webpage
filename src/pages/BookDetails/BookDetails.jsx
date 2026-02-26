import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utilities/addToDB";
import { toast, ToastContainer } from "react-toastify";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const books = useLoaderData();
  const singleBook = books.find((book) => book.bookId === id);
  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    rating,
    publisher,
    yearOfPublishing,
  } = singleBook;

  const handleMarkAsRead = (id) => {
    /**
     * 1. store with bookId
     * 2. where to store localDataBase
     * 3. store as a array or collection
     * 4. if book already exist in LDB show an alert
     * 5. if book didn't exist then push in the collection or array
     * */

    addToStoredDB(id);
    toast("You move the book in ReadList");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 h-177.5 mb-25 p-6 lg:p-0">
      <div className="bg-[#F3F3F3] md:py-20 md:px-52 flex-1 rounded-xl perspective-distant">
        <img
          className="h-full w-full"
          style={{
            transform: "rotateY(-45deg) rotateX(1deg)",
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
      <div className="flex-1 pt-0">
        <div className="pb-5 border-b border-dashed border-gray-200">
          <h2 className="text-4xl font-bold mb-4">{bookName}</h2>
          <p className="font-medium text-[#131313]/80">By : {author}</p>
        </div>
        <p className="font-medium text-[#131313]/80 my-3">{category}</p>
        <div className="py-4 border-y border-dashed border-gray-200">
          <p className="font-medium">
            Review :{" "}
            <span className="font-normal text-[#131313]/70">{review}</span>
          </p>
          <div className="flex items-center text-[#23BE0A] mt-6 font-medium">
            <p className="text-black mr-4">Tag</p>
            <p className="bg-[#23BE0A]/5 px-4 py-2 mr-4 rounded-4xl">
              #{tags[0]}
            </p>
            <p className="bg-[#23BE0A]/5 px-4 py-2 mr-3 rounded-4xl">
              #{tags[1]}
            </p>
          </div>
        </div>
        <div className="pt-5 text-[#131313] font-medium space-y-3">
          <p className="flex gap-4">
            <span className="w-48 text-[#131313]/80 font-normal">
              Number of Pages:
            </span>
            {totalPages}
          </p>
          <p className="flex gap-4">
            <span className="w-48 text-[#131313]/80 font-normal">
              Publisher:
            </span>
            {publisher}
          </p>
          <p className="flex gap-4">
            <span className="w-48 text-[#131313]/80 font-normal">
              Year of Publishing:
            </span>
            {yearOfPublishing}
          </p>
          <p className="flex gap-4">
            <span className="w-48 text-[#131313]/80 font-normal">Rating:</span>
            {rating}
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="btn mr-4 rounded-lg"
          >
            Read
          </button>
          <button className="btn bg-[#50B1C9] text-white rounded-lg">
            WishList
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
