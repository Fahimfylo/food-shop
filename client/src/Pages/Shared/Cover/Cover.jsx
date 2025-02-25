import React from "react";
import { Parallax } from "react-parallax";


const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero h-[800px]"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div
          className="hero-content py-16 px-32 text-neutral-content text-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-thin uppercase">{title}</h1>
            <p className="mb-5 text-xl font-thin">
              Would you like to try a dish?
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
