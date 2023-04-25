import React, { useState, useEffect, useContext } from "react";

// import icons
import {
  RiMapLine,
  RiArrowDownLine,
  RiArrowUpLine,
  RiMapPinLine,
} from "react-icons/ri";

// import headless ui
import { Menu } from "@headlessui/react";

//import house context
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="relative dropdown">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left dropdown-btn"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{country}</div>
          <div className="text-[13px] ">Kaduwela</div>
        </div>
        {isOpen ? (
          <RiArrowUpLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
    </Menu>
  );
};

export default CountryDropdown;
