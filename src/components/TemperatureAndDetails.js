import React from "react";
import { MdCircle } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { PiWindBold } from "react-icons/pi";
import { WiDaySunny } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { LiaTemperatureLowSolid } from "react-icons/lia";
const TemperatureAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-gray-500">
        <p>Cloudy or Whatever</p>
      </div>
      <div className="flex flex-row items-center justify-between text-xl text-white py-3">
        <MdCircle size={40} className="text-orange-500 mt-2" />
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
            <PiWindBold size={25} className="mt-1 mr-1" />
            Wind Speed :
            <span
              className="
            font-medium ml-1 mb-1 "
            >
              11 km/h
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-3 text-white text-sm py-2">
        <WiDaySunny/>
        <p className="font-light"> Rise: <span className="font-medium ml-1">6:45 AM</span></p>
        <p className="font-light">|</p>

        <WiSunset/>
        <p className="font-light"> Set: <span className="font-medium ml-1">7:45 PM</span></p>
        <p className="font-light">|</p>

        <LiaTemperatureHighSolid/>
        <p className="font-light"> High: <span className="font-medium ml-1">45°</span></p>
        <p className="font-light">|</p>

        <LiaTemperatureLowSolid/>
        <p className="font-light"> Low: <span className="font-medium ml-1">40°</span></p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
