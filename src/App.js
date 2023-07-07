import './App.css';
import {FaHourglassStart} from "react-icons/fa";
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-300 to-blue-400  h-fit 
    shadow-xl shadow-gray-400 text-center font-bold text-2xl">
     <TopButtons/>
     <Inputs/>
    </div>
  );
}

export default App;
