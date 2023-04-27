import React from "react";

import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <div className="p-5 bg-white rounded-tl-[90px] rounded-lt shadow-1 w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={image} alt="" />
      <div className="flex mb-4 text-sm gap-x-2">
        <div className="px-3 text-white bg-green-500 rounded-full">{type}</div>
        <div className="px-3 text-white bg-red-500 rounded-full">{country}</div>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{address}</div>
      
      <div className="flex my-1 gap-x-4">
      <div className="flex items-center gap-1 text-gray-600">
        <div className="text-[20px]">
          <BiBed/>
        </div>
        <div>{bedrooms}</div>
      </div>

      <div className="flex items-center gap-1 text-gray-600">
        <div className="text-[20px]">
          <BiBath/>
        </div>
        <div>{bathrooms}</div>
      </div>

      <div className="flex items-center gap-1 text-gray-600">
        <div className="text-[20px]">
          <BiArea/>
        </div>
        <div>{surface}</div>
      </div>
      </div>
      
      <div className="mb-4 text-lg font-semibold text-red-600">{price}</div>
    </div>
  );
};

export default House;
