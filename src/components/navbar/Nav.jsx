import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="md:flex gap-10 hidden text-xl  ">
      <NavLink to="/" className="text-gray-600 hover:text-gray-900 ">
        Home
      </NavLink>
      <NavLink to="/about-us" className="text-gray-600 hover:text-gray-900">
        About Us
      </NavLink>
      <NavLink to="/quotation" className="text-gray-600 hover:text-gray-900">
        Quotation
      </NavLink>
      <NavLink to="/gallery" className="text-gray-600 hover:text-gray-900">
        Gallery
      </NavLink>
      <NavLink to="/contact-us" className="text-gray-600 hover:text-gray-900">
        Contact Us
      </NavLink>
    </div>
  );
};

export default Nav;
