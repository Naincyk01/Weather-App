//import './App.css';
//import {FaHourglassStart} from "react-icons/fa";//
//import TopButtons from './components/TopButtons';//
// import Inputs from './components/Inputs';
// import TimeAndLocation from './components/TimeAndLocation';
// import TemperatureAndDetails from './components/TemperatureAndDetails';
//import Forecast from './components/Forecast';//
//import getFormattedWeatherData from './Services/weatherService';//
// import { useEffect, useState } from 'react';
// import { getFormattedWeatherData } from './Services/weatherService';

//function App() {
// const [query,setquery] = useState({q:'berlin'})//
// const [units,setUnits] = useState('metric')//
// const [weather,SetWeather] = useState(null)//

// useEffect(()=>{//

//   const fetchWeather = async () => {//
//       await getFormattedWeatherData({...query,units}).then((data)=>{//
//         SetWeather(data);//

//       });//

//   };//
//   fetchWeather();//
// },[query,units])//

//const [city ,setcity]=useState("paris")
//const [units,setUnits]= useState("metric");//
//const [weather,setWeather]= useState(null);

// useEffect (()=>{
//   const fetchWeatherData = async()=>{
//    const data = await getFormattedWeatherData(city)

//     setWeather(data);
//     console.log(data)

//   }
//   fetchWeatherData();
// },[city])

//   return (
//     <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-green-500 to-purple-400  h-fit
//     shadow-xl shadow-gray-400 text-center font-bold text-2xl">
//      {/* <TopButtons /> */}
//      <Inputs setcity = {setcity} />
// {weather && (
//   <div>

//   <TimeAndLocation weather ={weather}/>
//    <TemperatureAndDetails weather = {weather} />
//    {/* <Forecast title=" forecast"/> */}
//    {/* <Forecast title=" hourly forecast"/> */}
//    {/* <Forecast title=" daily forecast"/> */}
//   </div>

// )}

//     </div>
//   );
// }

//export default App
import cold from "./assets/coldnew.png";
import hot from "./assets/hot.jpg";
import Description from "./components/Description";
import { useState,useEffect } from "react";
import { getFormattedWeatherData } from "./Services/weatherService";

function App() {

const [bg,setbg] =useState(hot)
  const [city ,setcity] = useState("paris")
  const [weather,setWeather] = useState(null);
  const [units,setUnits] = useState("metric");

useEffect (()=>{
  const fetchWeatherData = async()=>{
  const data = await getFormattedWeatherData(city,units)
console.log(data)
    setWeather(data);
    const thresold = units === 'metric' ? 20 : 60;
    if(data.temp<=thresold) setbg(cold);
    else setbg(hot);
  };
  fetchWeatherData();
},[city,units])

const handleUnitsClick= (e) =>{
const button = e.currentTarget;
const currentUnit = button.innerText.slice(1)


const isCelsius = currentUnit === "C";
button.innerText = isCelsius ? "°F" : "°C";
setUnits(isCelsius ? "metric" : "imperial");
};

const enterKeyPressed = (e) =>{
 
  if(e.keyCode === 13){
    setcity(e.currentTarget.value);
   e.currentTarget.blur();
  }
}

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {
          weather && (

        <div className="container">
          <div className="section section_inputs">
            <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter city......" />
            <button onClick={(e) => handleUnitsClick(e)}>°F</button>
          </div>
          <div className="section section_temperature">
            <div className="icon">
              <h2>{`${weather.name},${weather.country}`}</h2>
              <img
                src={weather.iconURL}
                alt="weathericon"
              />
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h1>{`${weather.temp.toFixed()} °${units === "metric" ? "C" : "F"}`}</h1>
            </div>
          </div>
          {/* bottom description */}
          <Description weather = {weather} units ={units}/>
        </div>

          )
        }
      </div>
    </div>
  );
}

export default App;
