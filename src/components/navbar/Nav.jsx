import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ flexDirection, setMenuOpen }) => {
  return (
    <div className={`flex ${flexDirection} gap-10 text-xl mr-5`}>
      <NavLink
        to="/"
        className="nav-link text-gray-600 hover:text-gray-900"
        onClick={() => setMenuOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about-us"
        className="nav-link text-gray-600 hover:text-gray-900"
        onClick={() => setMenuOpen(false)}
      >
        About Us
      </NavLink>
      <NavLink
        to="/quotation"
        className="nav-link text-gray-600 hover:text-gray-900"
        onClick={() => setMenuOpen(false)}
      >
        Quotation
      </NavLink>
      <NavLink
        to="/gallery"
        className="nav-link text-gray-600 hover:text-gray-900"
        onClick={() => setMenuOpen(false)}
      >
        Gallery
      </NavLink>
      <NavLink
        to="/contact-us"
        className="nav-link text-gray-600 hover:text-gray-900"
        onClick={() => setMenuOpen(false)}
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default Nav;
