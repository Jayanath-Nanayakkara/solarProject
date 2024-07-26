import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ flexDirection, setMenuOpen }) => {
  return (
    <div className={`flex flex-row gap-10 text-xl ${flexDirection}`}>
      <NavLink
        to="/"
        className="text-gray-600 hover:text-gray-900"
        onClick={() => setMenuOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about-us"
        className="text-gray-600 hover:text-gray-900"
        onClick={() => setMenuOpen(false)}
      >
        About Us
      </NavLink>
      <NavLink
        to="/quotation"
        className="text-gray-600 hover:text-gray-900"
        onClick={() => setMenuOpen(false)}
      >
        Quotation
      </NavLink>
      <NavLink
        to="/gallery"
        className="text-gray-600 hover:text-gray-900"
        onClick={() => setMenuOpen(false)}
      >
        Gallery
      </NavLink>
      <NavLink
        to="/contact-us"
        className="text-gray-600 hover:text-gray-900"
        onClick={() => setMenuOpen(false)}
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default Nav;
