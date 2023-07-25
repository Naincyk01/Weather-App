import React from "react";
import "./Description.css";

import { FaTemperatureHigh } from "react-icons/fa"; 
import { RiTempHotLine } from "react-icons/ri";
import { FaTemperatureLow } from "react-icons/fa"; 
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { PiWindBold } from "react-icons/pi";
import { WiBarometer } from "react-icons/wi";

const Description = ({weather,units}) => {
  const tempUnit = units === 'metric' ? '°C' : '°F'
  const windUnit = units === 'metric' ? 'm/s' : 'm/h'
  const cards= [
    
    {
id:1,
icon:<FaTemperatureLow/>,
title:"min",
data:weather.temp_min.toFixed(),
unit:tempUnit,

    },
    {
      id:2,
      icon:<RiTempHotLine/>,
      title:"feels like",
      data:weather.feels_like.toFixed(),
      unit:tempUnit,
      
      },
    {
id:3,
icon:<FaTemperatureHigh/>,
title:"max",
data:weather.temp_max.toFixed(),
unit:tempUnit,

    },
    {
id:4,
icon:<PiWindBold/>,
title:"wind speed",
data:weather.speed.toFixed(),
unit:windUnit,

    },
    {
      id:5,
      icon:<WiHumidity/>,
      title:"humidity",
      data:weather.humidity,
      unit:"%",
      
          },
    {
      id:6,
      icon:<WiBarometer/>,
      title:"pressure",
      data:weather.pressure,
      unit:"hPa",
      
      },
  ]

   return (
    <div className="section section_descriptions">
      {cards.map(({id,icon,title,data,unit})=>(
      <div key={id} className="card">
        <div className="description_card-icon">
         {icon}
          <small>{title}</small>
        </div>
        <h2>{`${data} ${unit}`}</h2>
      </div>
))}

    </div>
  );
};

export default Description;
