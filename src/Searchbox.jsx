import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import "./Searchbox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo})

{
    let [city,setCity]=useState("")
    let [error,setError]=useState(false)
    let API_URL="https://api.openweathermap.org/data/2.5/weather"
    let API_KEY="7af659643937031656ad51902144e206"
 let getweather= async()=>
 {
    try
    {
        let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse=await response.json()
        console.log(jsonResponse)
        let results={
         city:city,
         temp:jsonResponse.main.temp,
         tempMin:jsonResponse.main.temp_min,
         tempMax:jsonResponse.main.temp_max,
         humidity:jsonResponse.main.humidity,
         feelsLike:jsonResponse.main.feels_like,
         weather:jsonResponse.weather[0].description,
        }
        console.log(results)
        return results
    }
    catch(err)
    {
        throw err
    }

 }

    // this state is used to connect with input
    
    // this method is used  to make changes in input
    let handleChange=(evt)=>
    {
        setCity(evt.target.value)
    }

    let handleSubmit=  async(evt)=>
    {
        try
        {
            evt.preventDefault()
            console.log(city)
            setCity("")
               let newInfo=await getweather()
               updateInfo(newInfo)
        }
        catch(err)
        {
            setError(true)
        }

    }

return(
    <div className='searchbox'>
        <h3>Search for a weather</h3>
        <form onSubmit={handleSubmit} >
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
         <br></br> <br />
        <Button variant="contained"  type='submit'>Submit</Button>
        {error  && <p>No such city are present</p>}
        </form>
    </div>
)
   
    
    
}