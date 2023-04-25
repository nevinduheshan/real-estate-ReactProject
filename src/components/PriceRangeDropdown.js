import React, { useState, useEffect, useContext } from "react";

// import icons
import {
  RiWallet3Line,
  RiArrowDownLine,
  RiArrowUpLine,
  RiMapPinLine,
} from "react-icons/ri";

// import headless ui
import { Menu } from "@headlessui/react";

//import house context
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '10000 - 13000',
    },
    {
      value: '13000- 23000',
    },
    {
      value: '23000- 33000',
    },
    {
      value: '33000- 43000',
    },
    {
      value: '43000- 53000',
    },
  ]

  return (
    <Menu as="div" className="relative dropdown">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left dropdown-btn"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px] ">Choose Price Range</div>
        </div>
        {isOpen ? (
          <RiArrowUpLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              className="transition cursor-pointer hover:text-red-700"
              as="li"
              key={index}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
