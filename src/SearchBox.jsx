import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import WeatherDashboard from './WeatherDashboard';

export default function SearchBox() {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const [city, setCity] = React.useState("");
  const [weather, setWeather] = React.useState(null);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const getWeatherInfo = async (city) => {
    try {
      setLoading(true);
      setError("");
      setWeather(null);

      let url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
      let response = await fetch(url);
      let data = await response.json();

      if (response.status === 404) {
        setError(`City "${city}" not found. Please try again.`);
        setLoading(false);
        return;
      }

      if (response.status !== 200) {
        setError(data.message || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      let weatherInfo = {
        temperature: data.main.temp,
        maxTemperature: data.main.temp_max,
        minTemperature: data.main.temp_min,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        cityName: data.name,
        country: data.sys.country,
        icon: data.weather[0].icon,
        date: new Date().toLocaleString(),
      };

      setWeather(weatherInfo);
      setError("");
      setLoading(false);
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      setWeather(null);
      setLoading(false);
    }
  };

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.trim() === "") {
      setError("Please enter a city name.");
      return;
    }
    getWeatherInfo(city);
    setCity("");
  }

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Weather Search
      </Typography>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <TextField
          id="outlined-basic"
          label="Enter City"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
          disabled={loading} // prevent input while loading
        />
        <br /><br />
        <Button
          variant="contained"
          type="submit"
          disabled={loading} // disable button while loading
        >
          {loading ? "Searching..." : "Search"}
        </Button>
      </form>

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      {loading && (
        <Box sx={{ mt: 3 }}>
          <CircularProgress />
        </Box>
      )}

      {!loading && weather && <WeatherDashboard weather={weather} />}
    </Box>
  );
}
