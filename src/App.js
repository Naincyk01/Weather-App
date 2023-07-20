import './App.css';
//import {FaHourglassStart} from "react-icons/fa";
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
//import getFormattedWeatherData from './Services/weatherService';
import { useEffect, useState } from 'react';
import { getFormattedWeatherData } from './Services/weatherService';

function App() {
// const [query,setquery] = useState({q:'berlin'})
// const [units,setUnits] = useState('metric')
// const [weather,SetWeather] = useState(null)

// useEffect(()=>{

//   const fetchWeather = async () => {
//       await getFormattedWeatherData({...query,units}).then((data)=>{
//         SetWeather(data);
//         console.log(data)
//       });
     
//   };
//   fetchWeather();
// },[query,units])


const [weather,setWeather]= useState(null);
 const [units,setUnits]= useState("metric");



useEffect (()=>{
  const fetchWeatherData = async()=>{
  const data = await getFormattedWeatherData('london');
   console.log(data)
  setWeather(data);
  }
  fetchWeatherData();//
},[])


  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-green-500 to-purple-400  h-fit 
    shadow-xl shadow-gray-400 text-center font-bold text-2xl">
     <TopButtons/>
     <Inputs/>
{weather && (
  <div>

  <TimeAndLocation weather ={weather}/>
   <TemperatureAndDetails weather = {weather}/>
   {/* <Forecast title=" forecast"/> */}
   {/* <Forecast title=" hourly forecast"/> */}
   {/* <Forecast title=" daily forecast"/> */}
  </div>

)}
     
     
    </div>
  );
}

export default App;
