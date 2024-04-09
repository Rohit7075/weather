import SearchBox from "./Searchbox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp()
{
    let [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:23.4,
        temp:25.5,
        tempMin:25.2,
        tempMax:26.1,
        humidity:47,
        weather:"haze",
    })

    let updateInfo=(newInfo)=>
    {
  setWeatherInfo(newInfo)
    }
    return(
        <div>
            <h2>Weather App</h2>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox  info={weatherInfo}/>
        </div>
    )
}