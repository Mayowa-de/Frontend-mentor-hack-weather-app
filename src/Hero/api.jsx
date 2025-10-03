export const fetchWeatherData = async (
  coordinate,
  selected,
  locationInput = ""
) => {
  let latitude = coordinate.latitude;
  let longitude = coordinate.longitude;
  let country = "";
  let city = "";
  // Allowing cors
 const proxy = "https://corsproxy.io/?";
  // If user provided a location, geocode it
  if (locationInput && locationInput.trim() !== "") {
    const geoUrl = `${proxy}https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      locationInput
    )}&count=5`;
    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();
    if (geoData && geoData.results?.length > 0) {
      latitude = geoData.results[0].latitude;
      longitude = geoData.results[0].longitude;
      country = geoData.results[0].country;
      city = geoData.results[0].name;
    } else {
      throw new Error("Location not found");
    }
  } else {
    // Reverse geocode current coordinates to get country/city
    const revGeoUrl = `${proxy}https://geocoding-api.open-meteo.com/v1/reverse?latitude=${latitude}&longitude=${longitude}&language=en`;
    const revGeoResponse = await fetch(revGeoUrl);
    const revGeoData = await revGeoResponse.json();
    console.log('Reverse geocodee:', revGeoData);
    if ( revGeoData && revGeoData.results?.length > 0) {
      country = revGeoData.results[0].country;
      city =
        revGeoData.results[0].city ||
        revGeoData.results[0].name;
    }
  }

  // Fetch weather data
  const unit =
    selected.temperature === "Fahrenheit (F)" ? "fahrenheit" : "celsius";
  const url = `${proxy}https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=${unit}&timezone=auto&hourly=temperature_2m,weathercode,relative_humidity_2m,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum,windspeed_10m_max&current=relative_humidity_2m&forecast_days=7`;
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
