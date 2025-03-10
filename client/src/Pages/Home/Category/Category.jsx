import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="my-20 lg:w-3/4 md:w-3/4 mx-auto">
      <SectionTitle
        subHeading={"---from 11.00am to 10.00pm---"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        initialSlide={2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={slide1} alt="" className="w-full h-full object-cover" />
          <h1 className="absolute bottom-0 left-0 right-0 flex justify-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-thin pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24">
            SALAD
          </h1>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide2} alt="" className="w-full h-full object-cover" />
          <h1 className="absolute bottom-0 left-0 right-0 flex justify-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-thin pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24">
            PIZZA
          </h1>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide3} alt="" className="w-full h-full object-cover" />
          <h1 className="absolute bottom-0 left-0 right-0 flex justify-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-thin pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24">
            SOUP
          </h1>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide4} alt="" className="w-full h-full object-cover" />
          <h1 className="absolute bottom-0 left-0 right-0 flex justify-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-thin pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24">
            DESSERT
          </h1>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide1} alt="" className="w-full h-full object-cover" />
          <h1 className="absolute bottom-0 left-0 right-0 flex justify-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-thin pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24">
            SALAD
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
