import React from "react";
import logo from "../../assets/logo.jpeg";

const Logo = () => {
  return (
    <div>
      <img className="flex w-12 md:w-20" src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
