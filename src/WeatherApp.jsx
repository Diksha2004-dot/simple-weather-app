import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

export default function WeatherApp(){

    const [weatherInfo,setWeatherInfo]=useState({
city:'Delhi',
    feelsLike:40.85,
    temp:33.85,
    tempmin:33.85,
    tempmax:33.85,
    humidity:58,
    weather:"overcast clouds",
    
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
       
 <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 4 }}>
<Typography variant="h4" gutterBottom>🌤️ Weather App</Typography>
 <SearchBox updateInfo={updateInfo}/>
  <InfoBox info={weatherInfo}/> 
</Container>

    
    )
}