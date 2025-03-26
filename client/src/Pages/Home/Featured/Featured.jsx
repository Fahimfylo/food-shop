import React from "react";
import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white">
      <div className="pt-20 mt-28">
        <SectionTitle
          heading={"from our menu"}
          subHeading={"---Check it out---"}
        />
      </div>
      <div className="md:flex gap-10 justify-center pb-24 px-4 sm:px-6 lg:px-96 items-center">
        <div className="w-full md:w-1/2">
          <img
            src={featuredImg}
            alt="Featured Dish"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-sm sm:text-base md:text-lg">Nov 20, 2025</p>
          <p className="uppercase text-lg sm:text-xl md:text-2xl">
            Where can I get some
          </p>
          <p className="text-xs sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam
            non qui maiores delectus atque modi voluptatem blanditiis obcaecati
            impedit, nemo harum ea error eum suscipit libero ut id
          </p>
          <Link to={`/order/salad`}>
            <button className="btn text-white border-0 hover:bg-orange-400 btn-outline border-b-4 mt-4 sm:mt-6">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
