import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utilities/addToDB";
import ListedBooks from "../ListedBooks/ListedBooks";

const ReadList = () => {
  const booksData = useLoaderData();
  const [myReadList, setMyReadList] = useState([]);
  const [sort, setSort] = useState("");
  console.log(booksData);

  useEffect(() => {
    const storedBookIds = getStoredBook();
    setMyReadList(
      booksData.filter((book) => storedBookIds.includes(book.bookId)),
    );
  }, [booksData]);

  // const myReadList = useMemo(() => {
  //   const storedBookIds = getStoredBook();
  //   return booksData.filter((book) => storedBookIds.includes(book.bookId));
  // }, [booksData]);

  const handleSort = (type) => {
    setSort(type);
    if (type === "Pages") {
      const sortByPages = [...myReadList].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setMyReadList(sortByPages);
    }
    if (type === "Ratings") {
      const sortByRatings = [...myReadList].sort((a, b) => b.rating - a.rating);
      setMyReadList(sortByRatings);
    }
  };

  return (
    <div>
      <div className="bg-[#F3F3F3] py-8.5 mb-8 rounded-2xl">
        <h2 className="text-4xl text-center font-bold">Books</h2>
      </div>
      <div className="flex justify-center items-center mb-14">
        <button
          className="btn bg-[#23BE0A] text-white rounded-lg"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
        >
          Sort By {sort ? `: ${sort}` : ""}
          <ChevronDown />
        </button>
        <ul
          className="dropdown menu w-41.5 text-[#23BE0A] text-base font-medium rounded-box bg-[#23BE0A]/5 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
        >
          <li className="hover:bg-white">
            <a onClick={() => handleSort("Pages")}>Pages</a>
          </li>
          <li className="hover:bg-white">
            <a onClick={() => handleSort("Ratings")}>Ratings</a>
          </li>
          {/* <li className="hover:bg-white">
            <a onClick={() => handleSort("Classic")}>Classic</a>
          </li> */}
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>WishList Books</Tab>
        </TabList>
        <TabPanel>
          <div className="flex flex-col mb-16">
            {myReadList.map((book) => (
              <ListedBooks
                key={book.bookId}
                book={book}
                myReadList={myReadList}
                setMyReadList={setMyReadList}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h3>This is WishList</h3>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
