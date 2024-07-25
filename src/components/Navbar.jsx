import React, { useState } from "react";
import Logo from "./navbar/Logo";
import Nav from "./navbar/Nav";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="flex p-2 flex-row bg-white sticky top-0 z-20 justify-between items-center">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div className="flex space-x-4 md:space-x-10">
          <Nav />
        </div>
        <div className="md:hidden">
          {menuOpen ? (
            <RxCross2
              className="text-gray-600 cursor-pointer w-6 h-6"
              onClick={toggleMenu}
            />
          ) : (
            <LuMenu
              className="text-gray-600 cursor-pointer w-6 h-6"
              onClick={toggleMenu}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
