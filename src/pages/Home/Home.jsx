import React, { Suspense } from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const books = useLoaderData();
  return (
    <div>
      <Banner />
      <Suspense
        fallback={
          <p>
            <span className="loading loading-dots loading-xl"></span>
          </p>
        }
      >
        <Books books={books} />
      </Suspense>
      <ToastContainer />
    </div>
  );
};

export default Home;
