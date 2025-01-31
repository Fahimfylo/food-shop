import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-20 w-3/4 mx-auto">
      <SectionTitle
        subHeading={"---What Our Customers Say---"}
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(reviews =><SwiperSlide
            key={reviews._id}>
                <div className="m-28 flex flex-col items-center">
                    <Rating 
                    style={{maxWidth: 180}}
                    value={reviews.rating}
                    readOnly></Rating>
                    <p className="py-5">{reviews.details}</p>
                    <p className="text-2xl text-orange-400">{reviews.name}</p>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Testimonials;
