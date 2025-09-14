import React from 'react'

export const fetchWeatherData = async (coordinate, selected) => {
  const { latitude, longitude } = coordinate;
  const unit = selected.temperature === 'Fahrenheit (F)' ? 'fahrenheit' : 'celsius';
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=${unit}&timezone=auto`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};