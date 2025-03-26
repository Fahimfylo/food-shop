import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  const navigate = useNavigate();

  // Navigation function
  const handleNavigation = (category) => {
    navigate(`/order/${category.toLowerCase()}`);
  };

  return (
    <div className="my-20 lg:w-3/4 md:w-3/4 mx-auto">
      <SectionTitle
        subHeading={"---from 11.00am to 10.00pm---"}
        heading={"Order Online"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        initialSlide={2}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {[
          { img: slide1, label: "SALAD" },
          { img: slide2, label: "PIZZA" },
          { img: slide3, label: "SOUP" },
          { img: slide4, label: "DESSERT" },
          { img: slide5, label: "DRINKS" },
        ].map((item, index) => (
          <SwiperSlide
            key={index}
            className="relative cursor-pointer"
            onClick={() => handleNavigation(item.label)}
          >
            <img
              src={item.img}
              alt={item.label}
              className="w-full h-full object-cover"
            />
            <h1 className="absolute bottom-0 left-0 right-0 flex justify-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-thin pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24">
              {item.label}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
