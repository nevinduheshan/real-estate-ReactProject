import React, { useState, useEffect, useContext } from "react";

// import icons
import {
  RiHome5Line,
  RiArrowDownLine,
  RiArrowUpLine,
  RiMapPinLine,
} from "react-icons/ri";

// import headless ui
import { Menu } from "@headlessui/react";

//import house context
import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="relative dropdown">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left dropdown-btn"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{property}</div>
          <div className="text-[13px] ">Kaduwela</div>
        </div>
        {isOpen ? (
          <RiArrowUpLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className="transition cursor-pointer hover:text-red-700"
              as="li"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
