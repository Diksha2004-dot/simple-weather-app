import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  './SearchBox.css';
export default function SearchBox({updateInfo}){
 const [city,setCity]=useState("");
 const [loading,setLoading]=useState(false);

const API_URL="https://api.openweathermap.org/data/2.5/weather";
const API_KEY="66e89cb59cab131635f7632320b0c8c7";

let getWeatherInfo =async()=>{
    setLoading(true);
    try{
    let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if(!response.ok){
    alert("City not found, please enter valid city name");
    setLoading(false);
     return ;
   }
   let jsonResponse= await response.json();
   console.log(jsonResponse);
 
   let forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
  let forecastData = await forecastRes.json();

  let filteredForecast = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"));
  let forecastList = filteredForecast.map(item => ({
    date: new Date(item.dt_txt).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' }),
    temp: Math.round(item.main.temp),
    weather: item.weather[0].description,
 
  }));
   let result={
    icon:jsonResponse.weather[0].icon,
    city:city,
    temp:jsonResponse.main.temp,
    tempmin:jsonResponse.main.temp_min,
     tempmax:jsonResponse.main.temp_max,
     humidity:jsonResponse.main.humidity,
     feelsLike:jsonResponse.main.feels_like,
     weather:jsonResponse.weather[0].description,
     forecast:forecastList
  };
  console.log(result);
  return result;
}catch(err){
    alert("something went wrong!");
   
}
finally{
    setLoading(false);
}
};




   

    const handleChange=(evt)=>{
setCity(evt.target.value)
    }
    const handleSubmit = async (evt) => {
  evt.preventDefault();
  console.log(city);
  setCity("");

  let newInfo = await getWeatherInfo();

  if (newInfo) {
    updateInfo(newInfo);
  }
};
    

    return(
        <div className='SearchBox'>
          
<form onSubmit={handleSubmit}>
 <TextField 
 id="city" 
 label="City Name"
  variant="outlined" 
  required
  value={city}
  onChange={handleChange}
 /><br></br><br></br>
 <Button variant="contained" type="submit">Search</Button>
 {loading && <p>Laoding</p>}
            </form>
        </div>
    )
}