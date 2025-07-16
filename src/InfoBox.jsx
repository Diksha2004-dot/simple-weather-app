import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Forecast from "./Forecast";

export default function InfoBox({info}){
   const INIT_URL="https://images.unsplash.com/photo-1720274706508-3eadc60e83f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3ZlcmNhc3QlMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D";
   const HOT_URL="https://media.istockphoto.com/id/1257088461/photo/glowing-sun-on-orange-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=VVQer6KRs36E9CHMTr6Qb9ySQHEyq4vziQj4B9bD2HI=";
   const COLD_URL="https://media.istockphoto.com/id/108223311/photo/lake-in-winter.webp?a=1&b=1&s=612x612&w=0&k=20&c=IPHHLC1pA3Q4v00KImLLafF0Iy7FCIO8cUcV3r3FM-0=";
   const RAIN_URL="https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.webp?a=1&b=1&s=612x612&w=0&k=20&c=jc45vpqNDgrvRZAn2foO82IhW9rUeXbQfxvLZaDW8H8=";
    
    return(
        <div>
           
             <Card sx={{ maxWidth: "100%" , mt:2 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80
          ?RAIN_URL
          :info.temp>15
          ?HOT_URL
          :COLD_URL}
        title="green iguana"
      />
      <CardContent>
       
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
         
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature:{info.temp}&deg;C</p>
            <p>Weather:{info.weather}</p>
            <p>Humidity:{info.humidity}</p>
            <p>Minimum Temperature:{info.tempmin}&deg;C</p>
            <p>Maximum Temperature:{info.tempmax}&deg;C</p>
            <p>The weather feels like:{info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
      
    </Card>
    <Forecast forecastList={info.forecast || []} />
        </div>
    )
}