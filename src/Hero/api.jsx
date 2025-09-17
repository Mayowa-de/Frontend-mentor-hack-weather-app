
export const fetchWeatherData = async (coordinate, selected, locationInput = '') => {
  let latitude = coordinate.latitude;
  let longitude = coordinate.longitude;
  let country = '';
  let city = '';

  // If user provided a location, geocode it
  if (locationInput && locationInput.trim() !== '') {
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(locationInput)}&count=5`;
    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();
    if (geoData.results && geoData.results.length > 0) {
      latitude = geoData.results[0].latitude;
      longitude = geoData.results[0].longitude;
      country = geoData.results[0].country;
      city = geoData.results[0].name;
    } else {
      throw new Error('Location not found');
    }
  } else {
    // Reverse geocode current coordinates to get country/city
    const revGeoUrl = `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${latitude}&longitude=${longitude}`;
    const revGeoResponse = await fetch(revGeoUrl);
    const revGeoData = await revGeoResponse.json();
    if (revGeoData && revGeoData.features && revGeoData.features.length > 0) {
      country = revGeoData.features[0].properties.country;
      city = revGeoData.features[0].properties.city || revGeoData.features[0].properties.name;
    }
  }
   

  // Fetch weather data
  const unit = selected.temperature === 'Fahrenheit (F)' ? 'fahrenheit' : 'celsius';
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=${unit}&timezone=auto`;
  const response = await fetch(url);
  const data = await response.json();

  // Attach country and city to the weather data
  return {
    ...data,
    current_weather: {
      ...data.current_weather,
      country,
      city,
    },
  };
};