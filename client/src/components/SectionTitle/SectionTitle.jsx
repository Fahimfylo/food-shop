import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="lg:w-1/3 md:w-1/3 mx-auto my-10">
      <p className="lg:text-xl text-center font-normal pb-5 text-yellow-500">
        ---{subHeading}---
      </p>
      <h3 className="py-5 text-center border-y-4  text-3xl uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
