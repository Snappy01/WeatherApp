
import logo from '../logo.svg'
import cloudy from '../img/cloudy.svg'
import day from '../img/day.svg'
import night from '../img/night.svg'
import weather from '../img/weather.svg'
import './TestPage.js'
import MyWeatherSelector from './TestPage.js';
import { useState } from 'react';

function App() {

  const [LabelLocation, setLabelLocation] = useState("Enter Location");
  const [icon, setIcon] = useState(0);
var iconsvg = cloudy;

  switch(icon)
{
  case 0:
iconsvg = cloudy;
break;
case 1:
iconsvg = day;
break;
case 2:
iconsvg = night;
break;
case 3:
iconsvg = weather;
break;

  default:
    break;
}

  return (

    <div className='flex h-screen items-center '>

    <div className='mx-auto'>
    <div className="max-w-lg rounded overflow-hidden shadow-lg ">
     
     <img className="w-full" src={iconsvg} alt="Sunset in the mountains"></img>
       
     <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{LabelLocation}</div>
    <MyWeatherSelector changeLabel = {setLabelLocation} seticonweather = {setIcon}/>
  </div>
         
  </div>
        
          
        
     
    </div></div>
  );
}

export default App;
