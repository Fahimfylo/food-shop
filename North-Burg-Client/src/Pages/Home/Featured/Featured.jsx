import React from "react";
import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white">
      <div className="pt-20 mt-28">
        <SectionTitle
          heading={"from our menu"}
          subHeading={"---Check it out---"}
        ></SectionTitle>
      </div>
      <div className="md:flex gap-10 justify-center pb-24 px-96 items-center">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>Nov 20, 2025</p>
          <p className="uppercase">Where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam
            non qui maiores delectus atque modi voluptatem blanditiis obcaecati
            impedit, nemo harum ea error eum suscipit libero ut id
            <button className="btn text-white border-0 hover:bg-orange-500 btn-outline border-b-4 mt-10 ">
              Order Now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
