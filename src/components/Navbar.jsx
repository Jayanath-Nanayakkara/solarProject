import React, { lazy, Suspense, useState } from "react";
import Logo from "./navbar/Logo";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Nav = lazy(() => import("./navbar/Nav"));

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="flex p-4 bg-white shadow-md sticky top-0 z-30 justify-between items-center">
        <NavLink to="/" aria-label="Homepage">
          <Logo />
        </NavLink>

        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <Suspense fallback={<div>Loading...</div>}>
            <Nav flexDirection="flex-row" />
          </Suspense>
        </div>

        <button
          className="md:hidden p-2 rounded-lg focus:outline-none"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <RxCross2 className="text-gray-600 w-6 h-6" />
          ) : (
            <LuMenu className="text-gray-600 w-6 h-6" />
          )}
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white bg-opacity-90 shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          menuOpen
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
        }`}
        style={{ transitionProperty: "transform, opacity" }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Nav flexDirection="flex-col pt-16 pl-5" setMenuOpen={setMenuOpen} />
        </Suspense>
      </div>
    </>
  );
};

export default Navbar;
