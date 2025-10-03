import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CountUp from "react-countup";
import { motion } from "framer-motion"; // ✅ import framer-motion

export default function WeatherDashboard({ weather }) {
  if (!weather) return null;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {weather.cityName}, {weather.country} 🌍
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {weather.date}
      </Typography>

      <Card
        sx={{
          mt: 3,
          borderRadius: "20px",
          background: "linear-gradient(135deg, #e0f7fa, #b2ebf2)",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-around",
              alignItems: "center",
              textAlign: "center",
              gap: 2,
            }}
          >
            {/* Temperature */}
            <Box>
              <Typography variant="h6">🌡️ Temperature</Typography>
              <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
                <CountUp end={weather.temperature} decimals={1} duration={1.5} />°C
              </Typography>
            </Box>

            {/* Humidity */}
            <Box>
              <Typography variant="h6">💧 Humidity</Typography>
              <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
                <CountUp end={weather.humidity} duration={1.5} />%
              </Typography>
            </Box>

            {/* Wind */}
            <Box>
              <Typography variant="h6">🌬️ Wind</Typography>
              <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
                <CountUp end={weather.windSpeed} decimals={1} duration={1.5} /> m/s
              </Typography>
            </Box>

            {/* Weather Condition */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <Typography variant="h6">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt="weather-icon"
                  style={{ width: 40, height: 40, verticalAlign: "middle" }}
                />{" "}
                {weather.description.charAt(0).toUpperCase() + weather.description.slice(1)}
              </Typography>
            </motion.div>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
