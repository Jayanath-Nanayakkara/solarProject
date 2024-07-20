import React from "react";
import Banner from "../../assets/hero";
import { FaStar } from "react-icons/fa";

const Quotationsection = () => {
  return (
    <div className="bg-gray-300 w-full h-auto flex flex-col md:flex-row p-10">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          className="max-w-full max-h-full"
          src={Banner[4]}
          alt="Quotation Image"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="uppercase text-4xl font-bold mb-8 md:mb-0">
          BENEFITS OF <b className="text-gray-700">calculating your bill</b>
        </h1>

        <div className="flex mt-6 md:mt-12">
          <FaStar className="mr-2 text-3xl mt-1 md:mt-0" />
          <p className="leading-7 text-xl md:text-2xl">
            YOU KNOW HOW MUCH YOU'VE BEEN CHARGED ALL THE TIME <br />
            <span className="font-semibold ml-2 text-base md:text-xl">
              Facility available for converting unit to total rupees
            </span>
          </p>
        </div>

        <div className="flex mt-6 md:mt-10">
          <FaStar className="mr-2 text-3xl mt-1 md:mt-0" />
          <p className="leading-7 text-xl md:text-2xl">
            YOU KNOW HOW MUCH YOU'VE BEEN CHARGED ALL THE TIME <br />
            <span className="font-semibold ml-2 text-base md:text-xl">
              Facility available for converting unit to total rupees
            </span>
          </p>
        </div>

        <div className="flex mt-6 md:mt-10">
          <FaStar className="mr-2 text-3xl mt-1 md:mt-0" />
          <p className="leading-7 text-xl md:text-2xl">
            YOU KNOW HOW MUCH YOU'VE BEEN CHARGED ALL THE TIME <br />
            <span className="font-semibold ml-2 text-base md:text-xl">
              Facility available for converting unit to total rupees
            </span>
          </p>
        </div>

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-6 uppercase md:w-48">
          get a quick quote
        </button>
      </div>
    </div>
  );
};

export default Quotationsection;
