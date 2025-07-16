import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

export default function Forecast({ forecastList }) {
  if (!forecastList.length) return null;

  return (
    <div style={{ marginTop: "2rem" }}>
      <Typography variant="h5" gutterBottom>5-Day Forecast</Typography>
      <Grid container spacing={2}>
        {forecastList.map((day, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{day.date}</Typography>
                
                <Typography>{day.temp}°C</Typography>
                <Typography variant="body2">{day.weather}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
