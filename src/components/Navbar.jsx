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
      <nav className="flex p-2 flex-row bg-white sticky top-0 z-30 justify-between items-center">
        <NavLink to="/">
          <Logo />
        </NavLink>

        <div className="md:flex hidden space-x-4 md:space-x-10">
          <Suspense fallback={<div>Loading...</div>}>
            <Nav flexDirection="flex-row" />
          </Suspense>
        </div>

        <div className="md:hidden relative">
          <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-40 cursor-pointer w-6 h-6"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {!menuOpen && <LuMenu className="text-gray-600 w-full h-full" />}
          </div>
        </div>
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
          <Nav flexDirection="flex-col pt-11 pl-5" setMenuOpen={setMenuOpen} />
        </Suspense>
        <div
          className="absolute top-4 right-4 cursor-pointer z-50"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <RxCross2 className="text-black w-6 h-6" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
