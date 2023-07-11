import React from "react";
import { MdCircle } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { PiWindBold } from "react-icons/pi";
const TemperatureAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-gray-500">
        <p>Cloudy or Whatever</p>
      </div>
      <div className="flex flex-row items-center justify-between text-xl text-white py-3">
        <MdCircle size={40} className="text-orange-600 mt-2" />
        <p className="text-3xl  mb-2">34°</p>
        <div className="flex flex-col space-y-2">

          <div className="flex font-light text-sm items-center justify-center">
            <CiTempHigh size={25} className="mt-1 " />
            Real fell :
            <span
              className="
            font-medium ml-1 mb-1 "
            >
              32°
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiHumidity size={25} className="mt-1 " />
            Humidity :
            <span
              className="
            font-medium ml-1 mb-1 "
            >
              65%
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <PiWindBold size={25} className="mt-1 " />
            Wind Speed :
            <span
              className="
            font-medium ml-1 mb-1 "
            >
              11km/h
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
