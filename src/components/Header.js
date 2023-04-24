import React from "react";

//import link
import { Link } from "react-router-dom";

//import logo
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container flex items-center justify-between mx-auto">
        {/* logo */}
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        {/* button */}
        <div className="flex items-center gap-6">
          <Link className="transition hover:text-red-900" to="">Log In</Link>
          <Link className="px-4 py-3 text-white transition bg-red-700 rounded-lg hover:bg-red-800" to="">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
