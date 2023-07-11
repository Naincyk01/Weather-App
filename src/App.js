import './App.css';
import {FaHourglassStart} from "react-icons/fa";
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-pink-500 to-purple-400  h-fit 
    shadow-xl shadow-gray-400 text-center font-bold text-2xl">
     <TopButtons/>
     <Inputs/>

     <TimeAndLocation/>
     <TemperatureAndDetails/>
    </div>
  );
}

export default App;
