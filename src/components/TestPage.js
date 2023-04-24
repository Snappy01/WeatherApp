
import { useState } from 'react';


function MyWeatherSelector({ changeLabel, seticonweather }) {
    const [city, setCity] = useState("");
    const [result, setResult] = useState(false);
    const [citydata, setData] = useState({});

    function handleClick() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=42192ca155c2ce86093994a45a5f9f7b')
            .then(response =>
                response.json()
            )
            .then(data => {

                console.log(data);
                changeLabel("Weather For " + city);
                ShowData(data)
            });
    }

    function ShowData(data) {
        setData(data)
        setResult(true);
        seticonweather(Math.floor(Math.random() * 3))

    }
    function ShowMainCard() {
        setResult(false);
        changeLabel("Enter Location")
    }

    if (!result) {
        return (

            <div className="flex flex-row items-center space-x-5">

                <div className="basis-1/2">
                    <input className="border-2" onChange={e => setCity(e.target.value)} />

                </div>


                <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Send
                </button>
            </div>



        )
    } else {
        if (citydata.cod == 400 ||citydata.cod == 404 ) {
            
            return (<div>
            <button onClick={ShowMainCard} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
            no Valid City
                    </button></div>
            )


        } else {
            return (
                <div className="flex flex-row items-center space-x-5">

                    <ul>
                        <li>{citydata.name}</li>
                        <li>{citydata.main.temp}</li>
                        <li>{citydata.weather[0].description}</li>

                    </ul>

                    <button onClick={ShowMainCard} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Try Again
                    </button>


                </div>
            )
        }

    }
}

export default MyWeatherSelector;




