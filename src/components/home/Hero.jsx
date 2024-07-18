import React, { useEffect, useState } from "react";
import Banner from "../../assets/hero";

const Hero = () => {
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageCount((prevCount) => (prevCount === 3 ? 0 : prevCount + 1));
    }, 5000);

    return () => clearTimeout(timer);
  }, [imageCount]);

  return (
    <div className="relative">
      <div className="h-[480px] md:h-[780px] overflow-hidden">
        <img
          key={imageCount}
          src={Banner[imageCount]}
          alt="Banner"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white">
        <div className="p-6">
          <h1 className="text-2xl sm:text-4xl md:text-6xl text-green-700 font-bold leading-tight">
            Solar world earth to sun
          </h1>
          <p className="text-green mt-4">Work with us </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
