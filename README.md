## 🌦️ Weather-Widget

A minimalist weather widget built with **React**, **Material UI**, and **Vite**. It delivers real-time weather updates with clarity and calm—designed to be simple, responsive, and beautiful.

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Display temperature, humidity, wind speed, and conditions
- 🕒 Local time and date display
- 🎨 Material UI for clean, responsive design
- ⚠️ Graceful error handling for invalid inputs or API issues

## 🧰 Tech Stack

- **Frontend**: React (with Vite)
- **UI Library**: Material UI
- **API**: OpenWeatherMap
- **Styling**: CSS + Material UI theming
- **Linting**: ESLint

## 📦 Installation

```bash
git clone https://github.com/your-username/Weather-Widget.git
cd Weather-Widget
npm install
npm run dev
```

## 🔑 API Setup

1. Sign up at [OpenWeatherMap](https://openweathermap.org/)
2. Generate your API key
3. Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

## 📁 Folder Structure

```
Weather-Widget/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── SearchBox.jsx
│   └── WeatherDashboard.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🧠 Component Overview

- `SearchBox.jsx`: Handles user input and triggers API calls
- `WeatherDashboard.jsx`: Displays weather data in styled Material UI cards
- `App.jsx`: Manages layout and component composition
- `main.jsx`: Entry point for rendering the app

## 🙋‍♀️ Author

Crafted with ❤️ by Muskan  
Connect on [LinkedIn](https://www.linkedin.com/) | Portfolio coming soon