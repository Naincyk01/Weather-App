import './App.css';
import {FaHourglassStart} from "react-icons/fa";
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getWeatherData from './Services/weatherService';
function App() {
  const fetchWeather = async () => {
     const data = await getWeatherData("weather",{q:"India"});
     console.log(data);
  };
fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-green-500 to-purple-400  h-fit 
    shadow-xl shadow-gray-400 text-center font-bold text-2xl">
     <TopButtons/>
     <Inputs/>

     <TimeAndLocation/>
     <TemperatureAndDetails/>
     <Forecast title="hourly forecast"/>
     <Forecast title="daily forecast"/>
    </div>
  );
}

export default App;
