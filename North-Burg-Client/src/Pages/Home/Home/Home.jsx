import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Banner2 from "../Banner2/Banner2";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Burgs | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Banner2></Banner2>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
