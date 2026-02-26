import React from "react";
import bannerImg from "../../assets/pngwing 1.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className='bg-[#131313]/5 py-20 px-8 lg:px-20 rounded-3xl'>
      <div className="flex justify-around items-center">
        <div>
          <h1 className="text-6xl font-bold mb-12 leading-20">
            Books to freshen up <br /> your bookshelf
          </h1>
          <Link to={"/readList"} className="btn bg-[#23BE0A] text-white text-xl font-medium px-7 py-6 rounded-lg">
            View The List
          </Link>
        </div>
        <img className="w-79.5 h-100" src={bannerImg} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
