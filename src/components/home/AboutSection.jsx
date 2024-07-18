import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-green-500 w-full md:w-1/2 h-auto md:min-h-[350px] p-6 mb-6 md:mb-0">
        <h1 className="text-white uppercase text-4xl mb-4">
          Why we came to the seen
        </h1>
        <p className="pl-1 pr-8 text-white text-xl mb-6">
          Simple, Clean and Professional In Sri Lanka, the Electricity Bill
          takes a considerable portion of consumption expenses of households and
          operational expenses of businesses. ...
        </p>
        <p className="flex items-center justify-end text-white text-sm uppercase cursor-pointer">
          See More....{" "}
          <IoIosArrowDroprightCircle
            className="ml-1"
            style={{ fontSize: "1.5em" }}
          />
        </p>
      </div>

      <div className="bg-blue-500 w-full md:w-1/2 h-auto md:min-h-[350px] p-6 mb-6 md:mb-0">
        <h1 className="text-white uppercase text-4xl mb-4">
          Why we came to the seen
        </h1>
        <p className="pl-1 pr-8 text-white text-xl mb-6">
          Simple, Clean and Professional In Sri Lanka, the Electricity Bill
          takes a considerable portion of consumption expenses of households and
          operational expenses of businesses. ...
        </p>
        <p className="flex items-center justify-end text-white text-sm uppercase cursor-pointer">
          See More....{" "}
          <IoIosArrowDroprightCircle
            className="ml-1"
            style={{ fontSize: "1.5em" }}
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
        <p className="flex items-center justify-end text-white text-sm uppercase cursor-pointer">
          See More....{" "}
          <IoIosArrowDroprightCircle
            className="ml-1"
            style={{ fontSize: "1.5em" }}
          />
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
