import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/bnr1.jpg";
import img2 from "../../../assets/home/bnr2.jpg";
import img3 from "../../../assets/home/bnr3.png";
import img4 from "../../../assets/home/bnr4.jpg";
import img5 from "../../../assets/home/bnr5.png";
import img6 from "../../../assets/home/bnr6.png";

const Banner = () => {
  return (
    <>
      <Carousel>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
        <div>
          <img src={img6} alt="" />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;

