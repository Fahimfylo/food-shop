import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-3">
      <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px] h-[100px]" src={image} alt="" />
      <div>
        <h1 className="uppercase">{name}</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500 font-medium">{price}</p>
    </div>
  );
};

export default MenuItem;
