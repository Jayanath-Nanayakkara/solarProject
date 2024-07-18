import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* First Column */}
      <div className="bg-green-500 w-full md:w-1/2 h-auto md:min-h-[350px] p-6 mb-6 md:mb-0">
        <h1 className="text-white uppercase text-4xl mb-4">
          Why we came to the seen
        </h1>
        <p className="pl-1 pr-8 text-white text-xl mb-6">
          Simple, Clean and Professional In Sri Lanka, the Electricity Bill
          takes a considerable portion of consumption expenses of households and
          operational expenses of businesses. ...
        </p>
        <p className="flex items-center justify-end text-white text-lg uppercase cursor-pointer transition-all duration-300 ease-in-out hover:text-green-600 hover:pl-2">
          See More....{" "}
          <IoIosArrowDropright
            className="ml-1 transition-all duration-300 ease-in-out transform hover:translate-x-1"
            style={{ fontSize: "1.5em", verticalAlign: "middle" }}
          />
        </p>
      </div>

      {/* Second Column */}
      <div className="bg-blue-500 w-full md:w-1/2 h-auto md:min-h-[350px] p-6 mb-6 md:mb-0">
        <h1 className="text-white uppercase text-4xl mb-4">
          Why we came to the seen
        </h1>
        <p className="pl-1 pr-8 text-white text-xl mb-6">
          Simple, Clean and Professional In Sri Lanka, the Electricity Bill
          takes a considerable portion of consumption expenses of households and
          operational expenses of businesses. ...
        </p>
        <p className="flex items-center justify-end text-white text-lg uppercase cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-600 hover:pl-2">
          See More....{" "}
          <IoIosArrowDropright
            className="ml-1 transition-all duration-300 ease-in-out transform hover:translate-x-1"
            style={{ fontSize: "1.5em", verticalAlign: "middle" }}
          />
        </p>
      </div>

      {/* Third Column */}
      <div className="bg-black w-full md:w-1/2 h-auto md:min-h-[350px] p-6">
        <h1 className="text-white uppercase text-4xl mb-4">
          Why we came to the seen
        </h1>
        <p className="pl-1 pr-8 text-white text-xl mb-6">
          Simple, Clean and Professional In Sri Lanka, the Electricity Bill
          takes a considerable portion of consumption expenses of households and
          operational expenses of businesses. ...
        </p>
        <p className="flex items-center justify-end text-white text-lg uppercase cursor-pointer transition-all duration-300 ease-in-out hover:text-gray-400 hover:pl-2">
          See More....{" "}
          <IoIosArrowDropright
            className="ml-1 transition-all duration-300 ease-in-out transform hover:translate-x-1"
            style={{ fontSize: "1.5em", verticalAlign: "middle" }}
          />
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
