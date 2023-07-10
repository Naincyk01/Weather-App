import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
const Inputs = () => {
  return (
    <div className="flex flex-row justify-center my-4">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search for the city...."
          className="text-xl font-light p-1 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />

        <HiOutlineSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 "
        />
        <CiLocationOn
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 "
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-xl text-white font-light">°C</button>
        <p className="text-xl text-white mx-1">|</p>
        <button name="imperial" className="text-xl text-white font-light">°F</button>
      </div>
    </div>
  );
};

export default Inputs;
